import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Course } from './course';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private service: CourseService) {}

    // get all
    @Get()
    @HttpCode(200)
    getAllCourses(): Promise<Course[]> {
        return this.service.getAllCourses();
    }

    // get by ID
    @Get(':id')
    @HttpCode(200)
    getCourseById(@Param('id') idToFind: number): Promise<Course> {
        return this.service.getCourseById(idToFind);
    }

    // create one
    @Post()
    @HttpCode(201)
    createCourse(@Body() newCourse: Course) {
        return this.service.createCourse(newCourse);
    }

    // update one
    @Put(':id')
    @HttpCode(200)
    updateCourse(@Param('id') routeId: number, @Body() courseToUpdate) {
        return this.service.updateCourse(routeId, courseToUpdate);
    }

    // delete one
    @Delete(':id')
    @HttpCode(204)
    deleteCourse(@Param('id') id: number): Promise<DeleteResult> {
        return this.service.deleteCourse(id);
    }

}