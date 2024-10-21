import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    // injecting our UserService to check users against our "database"
    constructor(private userService: UserService) {}

    // this method calls the user service and checks if the user exists AND if the passwords match
    // if so, it returns the user; if not, it returns nothing
    async authenticateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getUser(username);

        if (user && user.password === password) {
            // a shorthand for stripping the password and keeping the rest in a new object
            const { password, ...authenticatedUser } = user;

            return authenticatedUser;
        }

        return null;
    }

}
