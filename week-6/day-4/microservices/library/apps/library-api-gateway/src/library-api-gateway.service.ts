import { Injectable } from '@nestjs/common';

@Injectable()
export class LibraryApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
