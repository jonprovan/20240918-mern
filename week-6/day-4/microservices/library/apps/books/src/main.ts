import { NestFactory } from '@nestjs/core';
import { BooksAppModule } from './books-app.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksAppModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
