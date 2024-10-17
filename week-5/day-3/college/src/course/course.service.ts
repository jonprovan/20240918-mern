import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from './course';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course) private repo: Repository<Course>) {}

    // get all
    async getAllCourses(): Promise<Course[]> {
        return await this.repo.find({
            relations: {
                students: {
                    advisor: true
                }
            }
        });
    }

    // get by ID
    async getCourseById(idToFind: number): Promise<Course> {
        return await this.repo.findOneOrFail({
            where: {
                id: idToFind
            },
            relations: {
                students: {
                    advisor: true
                }
            }
        }).catch(() => {
            throw new HttpException(`Course with ID ${idToFind} does not exist!`, HttpStatus.NOT_FOUND)
        })
    }

    // create one
    async createCourse(newCourse: Course): Promise<Course> {
        await this.repo.exists({
            where: {
                id: newCourse.id
            }
        }).then(exists => {
            if (exists)
                throw new HttpException(`Course with ID ${newCourse.id} already exists!`, HttpStatus.BAD_REQUEST);
        })

        return await this.repo.save(newCourse);
    }

    // update one
    async updateCourse(routeId: number, courseToUpdate: Course) {
        if (routeId != courseToUpdate.id) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        await this.repo.exists({
            where: {
                id: courseToUpdate.id
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Course with ID ${courseToUpdate.id} does not exist!`, HttpStatus.NOT_FOUND);
        })

        // TO-DO: adjust for relations when we have them *******************************************
        return await this.repo.save(courseToUpdate);
    }

    // delete one
    async deleteCourse(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
