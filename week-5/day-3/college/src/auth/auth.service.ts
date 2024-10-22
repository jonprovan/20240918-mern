import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    // injecting our UserService to check users against our "database"
    // Nest has a JwtService we can use without having to create it!
    constructor(private userService: UserService, private jwtService: JwtService) {}

    // this method calls the user service and checks if the user exists AND if the passwords match
    // if so, it returns the user; if not, it returns nothing
    async authenticateUser(username: string, password: string): Promise<any> {

        const user = await this.userService.getUser(username);

        // using bcrypt to compare the incoming password with the one hashed in the database
        // the first one is the incoming password, the second is the one in the database
        // the order matters!! first one MUST be the unhashed version
        if (user && await bcrypt.compare(password, user.password)) {
            // a shorthand for stripping the password and keeping the rest in a new object
            const { password, ...authenticatedUser } = user;

            return authenticatedUser;
        }

        return null;
    }

    async register(username: string, password: string) {
        return await this.userService.register(username, password);
    }

    // this method returns a JWT to the user when they've logged in correctly
    // it is encoded using our secret (from the strategy)
    // it follows the properties laid out in our module
    async login(user: any) {
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
