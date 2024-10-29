import { Injectable } from '@nestjs/common';
import { RabbitService } from './rabbit/rabbit.service';

@Injectable()
export class AppService {

  constructor(private rabbitService: RabbitService) {}
  
  // just passing these along to the RabbitService
  // feel free to add logic/error handling here
  async sendToConsumerA(pattern: any, data: any) {
    return this.rabbitService.sendToConsumerA(pattern, data);
  }

  async sendToConsumerB(pattern: any, data: any) {
    return this.rabbitService.sendToConsumerB(pattern, data);
  }

}
