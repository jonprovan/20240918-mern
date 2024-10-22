import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

// this will contain endpoints for all authentication/authorization activity
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    @HttpCode(201)
    async register(@Body() body: any): Promise<any> {
        return await this.authService.register(body.username, body.password);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(200)
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

}
