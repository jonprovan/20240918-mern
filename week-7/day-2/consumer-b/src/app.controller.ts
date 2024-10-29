import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('example')
  respondToProducer(@Payload() payload: any) {
    return {
      confirmation: 'Consumer B has received the message!',
      payload: payload
    }
  }
}
