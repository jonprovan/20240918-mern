import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // note that the pattern and data for this request to Consumer A are included in the call
  @Post('a')
  sendToConsumerA(@Body() body: any) {
    return this.appService.sendToConsumerA('example', body);
  }

  @Post('b')
  sendToConsumerB(@Body() body: any) {
    return this.appService.sendToConsumerB('example', body);
  }

  // on the producer side, to hit a different consumer endpoint
  // just include the new endpoint pattern along with the data
  // this one ALSO goes to Consumer A, but with a different message pattern
  @Post('bogus')
  sendToBogus() {
    return this.appService.sendToConsumerA('bogus', {});
  }

  @Post('exchange')
  sendToExchange(@Body() body: any) {
    return this.appService.sendToExchange(body.exchange, body.routingKey, body.data);
  }

}
