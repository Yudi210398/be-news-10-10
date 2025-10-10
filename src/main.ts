import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true, // Mengizinkan pengiriman cookie
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Ijinkan method-method ini
  });

  await app.listen(3001);
}
bootstrap();
