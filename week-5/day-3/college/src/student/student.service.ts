import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student';
import { DeleteResult, Repository } from 'typeorm';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(Student) private repo: Repository<Student>, private courseService: CourseService) {}

    // get all
    async getAllStudents(): Promise<Student[]> {
        return await this.repo.find({
            relations: {
                advisor: true,
                courses: true
            }
        });
    }

    // get by ID
    async getStudentById(idToFind: number): Promise<Student> {
        return await this.repo.findOneOrFail({
            where: {
                id: idToFind
            },
            relations: {
                advisor: true,
                courses: true
            }
        }).catch(() => {
            throw new HttpException(`Student with ID ${idToFind} does not exist!`, HttpStatus.NOT_FOUND)
        })
    }

    // create one
    async createStudent(newStudent: Student, courses: string): Promise<Student> {
        await this.repo.exists({
            where: {
                id: newStudent.id
            }
        }).then(exists => {
            if (exists)
                throw new HttpException(`Student with ID ${newStudent.id} already exists!`, HttpStatus.BAD_REQUEST);
        })

        // tacking on something to push our courses to
        newStudent.courses = [];

        // going through each number in the courses parameter
        // for each one, getting the course from the DB and adding to the newStudent courses array
        for (let courseId of courses.split(',')) {
            await this.courseService.getCourseById(Number(courseId))
                .then(course => newStudent.courses.push(course));
        }

        return await this.repo.save(newStudent);
    }

    // update one
    async updateStudent(routeId: number, studentToUpdate: Student, courses: string) {
        if (routeId != studentToUpdate.id) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        await this.repo.exists({
            where: {
                id: studentToUpdate.id
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Student with ID ${studentToUpdate.id} does not exist!`, HttpStatus.NOT_FOUND);
        })

        // if you need to clear the join table, use a query!
        // use this method/syntax for any custom queries you want to run!
        // await this.repo.query(`DELETE FROM student_courses_course WHERE studentId = ${studentToUpdate.id}`).then(data => {
        //     console.log(data);
        // });

        studentToUpdate.courses = [];

        // going through each number in the courses parameter
        // for each one, getting the course from the DB and adding to the newStudent courses array
        for (let courseId of courses.split(',')) {
            await this.courseService.getCourseById(Number(courseId))
                .then(course => studentToUpdate.courses.push(course));
        }
        
        return await this.repo.save(studentToUpdate);
    }

    // delete one
    async deleteStudent(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
