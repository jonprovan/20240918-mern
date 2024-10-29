import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // we use the message patterns sent by the producer to determine which method we'll run
  // this is sort of like a @Get/@Post/@Put/@Delete endpoint suffix
  // the data we sent along gets packed into the @Payload object
  @MessagePattern('example')
  respondToProducer(@Payload() payload: any) {
    return {
      confirmation: 'Consumer A has received the message!',
      payload: payload
    }
  }

  // on the consumer side, to create a different "endpoint"
  // just add a new message pattern and go!
  @MessagePattern('bogus')
  bogusResponse() {
    return 'YA BOGUS!!'
  }
}
