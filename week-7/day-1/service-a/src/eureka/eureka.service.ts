import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';

@Injectable()
export class EurekaService implements OnModuleInit, OnModuleDestroy {

    // this variable holds our eventual client object
    private client: Eureka;
    
    // we set up the client in the constructor, similar to what we did in app.module using the other methodology
    constructor() {
        this.client = new Eureka({
            // this is for the Eureka server
            eureka: {
                host: 'localhost',
                port: 8761,
                servicePath: '/eureka/apps/'
            },
            // this is for this specific instance while registering
            instance: {
                app: 'service-a',                       // the name you call to when finding a service
                hostName: 'Service A @ Port 8081',      // what shows up on the righthand side of the Eureka dashboard
                ipAddr: 'localhost',                    // you'll need to dynamically draw this from the VM/container you're on
                port: {
                    '$': 8081,
                    '@enabled': true
                },
                vipAddress: 'service-a',                // an alternate IP (we don't use this)
                dataCenterInfo: {                       // a non-optional block required by the Eureka server (copy and paste)
                    '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                    'name': 'MyOwn'
                }
            }
        })
    }

    // this will happen when this service is instantiated at startup
    // if we don't include it in our providers array, it won't start!
    onModuleInit() {
        // these methods take optional lambdas for error handling
        // the start method of the client initiates the connect and registers the instance with Eureka
        this.client.start((err) => {
            if(err) console.log(err);
            else console.log('Connected to Eureka and registered successfully!');
        });
    }

    // this one occurs when the service is destroyed
    // for us, that's not until we close the app
    onModuleDestroy() {
        this.client.stop();
    }

    // with this new package/format, getting a URL for another service is much easier
    async getURLByServiceName(name: string) {
        let instance = await this.client.getInstancesByAppId(name)[0];
        return `http://${instance.ipAddr}:${instance.port['$']}`;
    }
}
