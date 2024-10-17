// npm i class-validator to use this
// this will verify that incoming values for these fields match the class's types for those variables
// or that they're not empty, or any number of other validations
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Student } from "src/student/student";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() // this is a database entity
export class Advisor {

    // primary key
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    // other column
    @Column()
    @IsString()
    @IsNotEmpty()
    advisorName: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    department: string;

    // one advisor can have many students
    // this property DOES NOT live in the database for this class (foreign key on other side)
    // two lambdas, first connects to the Student class, second tells us which property in that class dictates the specific advisor
    @OneToMany(() => Student, student => student.advisor)
    students: Student[];

}
