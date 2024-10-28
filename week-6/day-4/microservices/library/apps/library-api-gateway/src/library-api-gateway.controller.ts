import { Controller, Get } from '@nestjs/common';
import { LibraryApiGatewayService } from './library-api-gateway.service';

@Controller()
export class LibraryApiGatewayController {
  constructor(private readonly libraryApiGatewayService: LibraryApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.libraryApiGatewayService.getHello();
  }
}
