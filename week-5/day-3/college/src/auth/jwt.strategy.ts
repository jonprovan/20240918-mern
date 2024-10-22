import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";

// this file is how requests will get authenticated via JWT
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'Super Secret Secret'
        })
    }

    async validate(payload: any) {
        // later on, we may have roles attached to our user object, so we'll get the user here
        // we can attach additional properties to the outgoing object
        // const user = await this.userService.getUser(payload.username);
        return { userId: payload.sub, username: payload.username }
    }

}