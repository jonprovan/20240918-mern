import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitService } from './rabbit/rabbit.service';
import { RabbitModule } from './rabbit/rabbit.module';

@Module({
  imports: [RabbitModule],
  controllers: [AppController],
  providers: [AppService, RabbitService],
})
export class AppModule {}
