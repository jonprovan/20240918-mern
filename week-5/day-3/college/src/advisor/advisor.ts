// npm i class-validator to use this
// this will verify that incoming values for these fields match the class's types for those variables
// or that they're not empty, or any number of other validations
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
