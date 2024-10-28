import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  // this method returns the list of ALL instances from our Eureka server
  async getInstances() {
    let responseData;
    let headers = {
      "Accept": "application/json"
    }
    await fetch('http://localhost:8761/eureka/apps', { headers: headers }).then(async data => await data.json()).then(json => responseData = json);
    return responseData.applications.application;
  }

  // this method takes in a service name
  // it then uses that service name to retrieve and piece together the baseURL with which to access that service
  // this is what we'll use to find services and make calls to them in other methods/classes
  // if you use eureka-js-client instead of nestjs-eureka, this process is much simpler
  // see service-a's EurekaService class for that example
  async getInstanceURLByName(name: string) {
    let instances;
    // we need this header, or the Eureka server will respond with XML
    let headers = {
      "Accept": "application/json"
    }
    await fetch('http://localhost:8761/eureka/apps', { headers: headers })
      .then(async data => await data.json())
      .then(json => instances = json.applications.application);
    
    for(let instance of instances) {
      if(instance.name === name.toUpperCase()) {
        return `http://${instance.instance[0].ipAddr}:${instance.instance[0].port.$}`
      }
    }
  }

  // using our service discovery to locate Service A and then make a request to it
  async getHelloFromA() {
    let hello;
    await fetch(await this.getInstanceURLByName('service-a')).then(data => data.json()).then(json => hello = json);
    return hello;
  }

  // reaching out to A
  async getThroughFromA() {
    let through;
    // note that we're tacking on the endpoint text
    await fetch(await this.getInstanceURLByName('service-a') + '/through').then(data => data.json()).then(json => through = json);
    return through;
  }

  // responding to A reaching back out to the gateway
  async respondToA() {
    return { msg: 'Hello from the Gateway!!' };
  }
}
