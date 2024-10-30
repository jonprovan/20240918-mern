import { MessageHandlerErrorBehavior, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    // this annotation goes over the method we want to execute when this exchange/routing key are published to
    // when a message is published to this exchange, this method will automatically run
    // *** NOTE -- doing it this way auto-creates a temp queue for this consumer
    // *** when you restart, it'll create another one and leave the old one in place
    // *** so, it may be advantageous to have the exchange post to a named queue and consume it in the traditional fashion
    // *** OR, you can subscribe to a queue instead of the exchange and process it like this
    @RabbitSubscribe({
        exchange: 'example.fanout',
        routingKey: '',
        errorBehavior: MessageHandlerErrorBehavior.ACK
    })
    processExchangeMessage(payload: any) {
        console.log(payload);
    }
  
}
