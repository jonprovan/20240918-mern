import { Injectable } from '@nestjs/common';

// the Injectable decorator says this is a provider that can be injected into other classes as needed
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
