import { NestFactory } from '@nestjs/core';
import { LibraryApiGatewayModule } from './library-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(LibraryApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
