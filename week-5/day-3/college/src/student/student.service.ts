import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class StudentService {

    constructor(@InjectRepository(Student) private repo: Repository<Student>) {}

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
    async createStudent(newStudent: Student): Promise<Student> {
        await this.repo.exists({
            where: {
                id: newStudent.id
            }
        }).then(exists => {
            if (exists)
                throw new HttpException(`Student with ID ${newStudent.id} already exists!`, HttpStatus.BAD_REQUEST);
        })

        return await this.repo.save(newStudent);
    }

    // update one
    async updateStudent(routeId: number, studentToUpdate: Student) {
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

        // TO-DO: adjust for relations when we have them *******************************************
        return await this.repo.save(studentToUpdate);
    }

    // delete one
    async deleteStudent(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
