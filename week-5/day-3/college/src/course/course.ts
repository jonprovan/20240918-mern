import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Student } from "src/student/student";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    courseName: string;

    // DO NOT use the @JoinTable annotation on the non-controlling side
    @ManyToMany(() => Student, student => student.courses)
    students: Student[];
}