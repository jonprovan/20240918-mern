import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EurekaService } from './eureka/eureka.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private eurekaService: EurekaService) {}

  // this will respond to the gateway's helloFromA request (user -> gateway -> service-a)
  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  // this responds to the gateway's pingpong request (user -> gateway -> service-a -> gateway)
  @Get('through')
  async through() {
    return await this.appService.askA();
  }
}
