import { MessageHandlerErrorBehavior, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    @RabbitSubscribe({
        exchange: 'example.fanout',
        routingKey: '',
        errorBehavior: MessageHandlerErrorBehavior.ACK
    })
    processExchangeMessage(payload: any) {
        console.log(payload);
    }
  
}
