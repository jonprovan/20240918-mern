import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student';

@Module({
  imports: [ TypeOrmModule.forFeature([Student]) ],
  exports: [ TypeOrmModule ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
