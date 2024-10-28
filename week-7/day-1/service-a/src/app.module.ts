import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { EurekaModule } from 'nestjs-eureka';
import { EurekaService } from './eureka/eureka.service';

@Module({
  // this code is necessary if you're using nestjs-eureka

  // imports: [EurekaModule.forRoot({
  //   eureka: {
  //     host: 'localhost',
  //     port: 8761
  //   },
  //   service: {
  //     name: 'service-a',
  //     port: 8081
  //   }
  // })],

  // this version is for eureka-js-client (check the providers array)
  imports: [],
  controllers: [AppController],
  providers: [AppService, EurekaService], // must include the new EurekaService here
})
export class AppModule {}
