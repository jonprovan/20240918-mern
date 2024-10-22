import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    username: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    password: string;

    constructor(id: number, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

}
