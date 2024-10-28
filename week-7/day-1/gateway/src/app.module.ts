import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EurekaModule } from 'nestjs-eureka';

// using nestjs-eureka
// the setup for registration is done in the app.module file and is pretty straightforward
@Module({
  // add the EurekaModule to your imports array
  // in it, we need to register this instance AND indicate where the service discovery instance is located
  imports: [
    EurekaModule.forRoot({
      // this object sets up the location of the eureka-server
      eureka: {
        host: 'localhost',
        port: 8761
      },
      // this object sets up this service
      service: {
        name: 'gateway',  // the name is what we'll use to ask the discovery service about this service
        port: 8080
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
