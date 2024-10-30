import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
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
