import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    // creating an in-memory list of users for basic authentication
    private users = [
        {
            id: 1,
            username: 'user1',
            password: '11111'
        },
        {
            id: 2,
            username: 'user2',
            password: '22222'
        },
        {
            id: 3,
            username: 'user3',
            password: '33333'
        }
    ]

    // a method to get a user by username
    // it should only use the username, because with tokens, we won't have access to the password
    async getUser(username: string): Promise<any | undefined> {
        // .find() takes a predicate and returns the user that matches the given username
        return this.users.find(user => user.username === username);
    }

}
