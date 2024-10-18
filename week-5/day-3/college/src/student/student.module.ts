import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student';
import { CourseModule } from 'src/course/course.module';
import { CourseService } from 'src/course/course.service';

@Module({
  // to use our CourseService, we have to include the module here...
  imports: [ TypeOrmModule.forFeature([Student]), CourseModule ],
  exports: [ TypeOrmModule ],
  // ...and the service here
  providers: [ StudentService, CourseService ],
  controllers: [ StudentController ]
})
export class StudentModule {}
