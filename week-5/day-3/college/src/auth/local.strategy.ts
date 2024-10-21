// this file outlines our local auth strategy for use in our Passport-fueled Guard

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

// in general here, we're taking the auth information from the request
// and checking it against our list of users
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    // injecting our AuthService
    // super() is required because we're extending a parent class
    constructor(private authService: AuthService) {
        super();
    }

    // you must "override" this method and take in the username and password
    async validate(username: string, password: string) {
        const user = await this.authService.authenticateUser(username, password);

        if (!user)
            // this is a special type of exception set up to make this situation more straightforward
            throw new UnauthorizedException();
        return user;
    }

}