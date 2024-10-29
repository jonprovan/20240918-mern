import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // this setup is just like a regular microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,           // using RabbitMQ's transport layer
    options: {
      urls: ['amqp://localhost:5672'],  // where the RabbitMQ server lives
      queue: 'consumer-a',              // which queue this service subscribes to
      queueOptions: {
        durable: true                   // whether or not this queue's messages are stored to disk
      }
    }
  })
  await app.listen();
}
bootstrap();
