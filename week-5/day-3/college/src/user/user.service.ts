import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
// this import allows us to hash incoming passwords as well as compare them to database entries
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    // creating an in-memory list of users for basic authentication
    // private users = [
    //     {
    //         id: 1,
    //         username: 'user1',
    //         password: '11111'
    //     },
    //     {
    //         id: 2,
    //         username: 'user2',
    //         password: '22222'
    //     },
    //     {
    //         id: 3,
    //         username: 'user3',
    //         password: '33333'
    //     }
    // ]

    // a method to get a user by username
    // it should only use the username, because with tokens, we won't have access to the password
    // async getUser(username: string): Promise<any | undefined> {
        // .find() takes a predicate and returns the user that matches the given username
    //     return this.users.find(user => user.username === username);
    // }

    // the above used our in-memory user "database"
    // this uses the actual users in our database
    async getUser(username: string): Promise<User> {
        return await this.userRepository.findOne({ where: { username: username } });
    }

    async register(username: string, password: string) {
        let newUser;

        // we hash the password with bcrypt before storing it in the database
        // this password is unable to be backward-hashed into the original password
        // we can only hash a guessed password and compare the two
        await this.userRepository.save(new User(0, username, await bcrypt.hash(password, 10)))
            .then(user => newUser = user)
            .catch(error => { throw new HttpException('Username must be unique!', HttpStatus.BAD_REQUEST) })

        return newUser;
    }

}
