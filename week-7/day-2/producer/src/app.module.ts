import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitService } from './rabbit/rabbit.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RabbitService],
})
export class AppModule {}
