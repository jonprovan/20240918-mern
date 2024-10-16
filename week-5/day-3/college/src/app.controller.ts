import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // in Nest, we have decorators (annotations) we can use to easily set up controller methods
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
