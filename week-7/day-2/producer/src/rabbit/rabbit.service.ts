import { HttpException, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class RabbitService {

    // placeholders for our objects that will represent the consumers
    private consumerA: ClientProxy;
    private consumerB: ClientProxy;

    constructor() {
        // setting up each consumer to eventually send to via RabbitMQ
        this.consumerA = ClientProxyFactory.create({
            transport: Transport.RMQ,               // using RabbitMQ's transport layer
            options: {
                urls: ['amqp://localhost:5672'],    // where the RabbitMQ server is
                queue: 'consumer-a'                 // which queue to post to for this consumer
            }
        });

        this.consumerB = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'consumer-b'
            }
        });
    }

    // we'll call these methods from other classes to send messages to the consumers
    // the pattern is basically like a route that will determine which method runs on the consumer side
    async sendToConsumerA(pattern: any, data: any) {
        return await firstValueFrom(
            this.consumerA.send(pattern, data).pipe(
                catchError(error => { throw new HttpException(error, error.status) })
            )
        )
    }

    async sendToConsumerB(pattern: any, data: any) {
        return await firstValueFrom(
            this.consumerB.send(pattern, data).pipe(
                catchError(error => { throw new HttpException(error, error.status) })
            )
        )
    }

}
