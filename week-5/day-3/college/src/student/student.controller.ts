import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { StudentService } from './student.service';
import { Student } from './student';

@Controller('student')
export class StudentController {

    constructor(private service: StudentService) {}

    // get all
    @Get()
    @HttpCode(200)
    getAllStudentrs(): Promise<Student[]> {
        return this.service.getAllStudents();
    }

    // get by ID
    @Get(':id')
    @HttpCode(200)
    getStudentById(@Param('id') idToFind: number): Promise<Student> {
        return this.service.getStudentById(idToFind);
    }

    // create one
    @Post()
    @HttpCode(201)
    // taking in the courses as a query parameter
    createStudent(@Body() newStudent: Student, @Query('courses') courses: string) {
        return this.service.createStudent(newStudent, courses);
    }

    // update one
    @Put(':id')
    @HttpCode(200)
    updateStudent(@Param('id') routeId: number, @Body() studentToUpdate, @Query('courses') courses: string) {
        return this.service.updateStudent(routeId, studentToUpdate, courses);
    }

    // delete one
    @Delete(':id')
    @HttpCode(204)
    deleteStudent(@Param('id') id: number): Promise<DeleteResult> {
        return this.service.deleteStudent(id);
    }

}