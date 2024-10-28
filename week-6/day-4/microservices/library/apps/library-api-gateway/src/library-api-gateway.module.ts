import { Module } from '@nestjs/common';
import { LibraryApiGatewayController } from './library-api-gateway.controller';
import { LibraryApiGatewayService } from './library-api-gateway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [LibraryApiGatewayController],
  providers: [LibraryApiGatewayService],
})
export class LibraryApiGatewayModule {}
