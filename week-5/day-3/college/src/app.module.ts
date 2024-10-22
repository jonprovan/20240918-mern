import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvisorModule } from './advisor/advisor.module';
import { AdvisorController } from './advisor/advisor.controller';
import { AdvisorService } from './advisor/advisor.service';
import { Advisor } from './advisor/advisor';
import { StudentModule } from './student/student.module';
import { Student } from './student/student';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { CourseModule } from './course/course.module';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { Course } from './course/course';
import { Lumberjack1Middleware } from './middleware/lumberjack-1.middleware';
import { lumberjack2 } from './middleware/lumberjack-2.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { HttpModule } from '@nestjs/axios';
import { User } from './user/user';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    // setting up typeorm at the root level
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'college',
      synchronize: false, // IMPORTANT!! if this is true, your changes in the app will affect the schema!!
      entities: [ Advisor, Student, Course, User ] // must add DB entities as you create them
    }),
    AdvisorModule,
    StudentModule,
    CourseModule,
    UserModule,
    AuthModule,
    HttpModule,
    JwtModule
  ],
  // controllers are classes with endpoints we can hit from the front
  // add each controller as you create it
  controllers: [ AppController, AdvisorController, StudentController, CourseController ],
  // add each service as you create it
  // providers (most often services) are classes we can inject into other classes to provide functionality
  // any guard you want to use globally should be added here using APP_GUARD
  providers: [ AppService, AdvisorService, StudentService, CourseService, UserService, AuthService, { provide: APP_GUARD, useClass: JwtAuthGuard } ],
})

// the content of this export sets up our app to use middleware, either class-based or functional
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // if multiple middleware is active for a specific route
    // they'll execute in the order they're applied below
    // you can specify or exclude routes for each middleware
    consumer.apply(Lumberjack1Middleware).forRoutes("course", "advisor");
    consumer.apply(lumberjack2).exclude("student").forRoutes("*");
  }
}
