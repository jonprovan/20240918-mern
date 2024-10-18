import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this allows our app to validate input as it's coming in
  // npm i class-transformer to use
  // add the whitelist option to strip out properties not in the correspoding object's class
  // careful with the whitelist -- it will eliminate relations from incoming objects!!
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
