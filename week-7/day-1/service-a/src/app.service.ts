import { Injectable } from '@nestjs/common';
import { EurekaService } from './eureka/eureka.service';

@Injectable()
export class AppService {

  constructor(private eurekaService: EurekaService){}

  // returning straight to the gateway
  getHello(): object {
    return { msg: 'Hello from Service A!'};
  }

  // reaching to the gateway with another request, then responding to its original request
  async askA() {
    let response;
    // note that we're tacking on the endpoint text
    await fetch(await this.eurekaService.getURLByServiceName('gateway') + '/secondary').then(data => data.json()).then(json => response = json);
    return response;
  }
}
