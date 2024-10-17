import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Advisor } from "src/advisor/advisor";
import { Course } from "src/course/course";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    studentName: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    studentYear: string

    @Column()
    @IsNumber()
    @IsNotEmpty()
    advisorId: number;

    // we do the flip here, connecting to the other class
    @ManyToOne(() => Advisor, advisor => advisor.students)
    advisor: Advisor;

    // one student can have many courses and vice versa
    // this side is the "controlling side" from a TypeORM standpoint
    // the table name for the join table MUST be, in this case, student_courses_course
    @ManyToMany(() => Course, course => course.students)
    @JoinTable()
    courses: Course[];
}
