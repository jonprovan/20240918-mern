import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // to reach out to A, then return its response
  @Get('hellofroma')
  async getHelloFromA() {
    return this.appService.getHelloFromA();
  }

  // to reach out to A, then have A reach back to the gateway (unusual, just for demo purposes)
  @Get('pingpong')
  async getThroughFromA() {
    return await this.appService.getThroughFromA();
  }

  // when A reaches back out to the gateway as a result of the above method (again, unusual)
  @Get('secondary')
  async respondToA() {
    return await this.appService.respondToA();
  }

}
