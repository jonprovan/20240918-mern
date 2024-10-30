import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
    // import the module here with your exchange settings, the same as in the producer
    imports: [
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
