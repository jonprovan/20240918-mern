import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course';

@Module({
  imports: [ TypeOrmModule.forFeature([Course]) ],
  exports: [ TypeOrmModule ],
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
