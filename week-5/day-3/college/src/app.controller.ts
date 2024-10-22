import { Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './decorators/public.decorator';

@Controller()
// @Public() // you can use Decorators for guards at the class level as well
export class AppController {
  constructor(private readonly appService: AppService) {}

  // in Nest, we have decorators (annotations) we can use to easily set up controller methods
  // @SetMetadata assigns a key-value pair to this method
  // we can access that key-value pair elsewhere to bypass the guard (or do whatever else we wish)
  // @SetMetadata('public', true)

  // using our custom decorator
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // to protect an endpoint using any strategy, you must apply the guard to that endpoint
  @UseGuards(LocalAuthGuard)
  @Post('guarded')
  getGuardedMessage(): string {
    return 'You have passed the guard!'
  }

  // don't need this Decorator now that the JWT Auth Guard is being used globally
  // @UseGuards(JwtAuthGuard)
  @Get('jwtGuarded')
  getJwtGuardedMessage(): string {
    return 'You have passed the JWT Guard!';
  }

  // getting from an external API
  @Public()
  @Get('external')
  getFromExternalApi(): Promise<any> {
    return this.appService.getFromExternalApi();
  }
}
