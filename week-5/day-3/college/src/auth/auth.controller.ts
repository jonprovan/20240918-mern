import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from 'src/decorators/public.decorator';

// this will contain endpoints for all authentication/authorization activity
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    // this method requires no username/password for authentication
    // it also requires no token
    // so we bypass token auth with our custom @Public() Decorator
    @Public()
    @Post('register')
    @HttpCode(201)
    async register(@Body() body: any): Promise<any> {
        return await this.authService.register(body.username, body.password);
    }

    // this method DOES require username/password, so we leave the LocalAuthGuard ON
    // but it DOES NOT require token auth, so set it as @Public()
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(200)
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

}
