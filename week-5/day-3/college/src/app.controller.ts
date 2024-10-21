import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // in Nest, we have decorators (annotations) we can use to easily set up controller methods
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

  // getting from an external API
  @Get('external')
  getFromExternalApi(): Promise<any> {
    return this.appService.getFromExternalApi();
  }
}
