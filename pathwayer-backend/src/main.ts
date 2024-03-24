import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import cors from 'cors';

async function bootstrap() {
  // eslint-disable-next-line prettier/prettier
  const app = await NestFactory.create(AppModule, { cors: true });
  //app.use(cors({credentials: true,  origin: '*'}));
  await app.listen(8000);
}
bootstrap();
