import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
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
    createStudent(@Body() newStudent: Student) {
        return this.service.createStudent(newStudent);
    }

    // update one
    @Put(':id')
    @HttpCode(200)
    updateStudent(@Param('id') routeId: number, @Body() studentToUpdate) {
        return this.service.updateStudent(routeId, studentToUpdate);
    }

    // delete one
    @Delete(':id')
    @HttpCode(204)
    deleteStudent(@Param('id') id: number): Promise<DeleteResult> {
        return this.service.deleteStudent(id);
    }

}