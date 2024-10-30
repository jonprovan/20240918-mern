import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        // setting up our producer to be able to post to an exchange instead of a direct queue
        // we can still post to queues using our existing logic
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'example.fanout',
                    type: 'fanout'
                }
            ],
            uri: 'amqp://localhost:5672'
        })
    ],
    exports: [ RabbitMQModule ]
})
export class RabbitModule {}
