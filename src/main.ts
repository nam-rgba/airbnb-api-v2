import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    //Add your origins here
    origin: true,
    credentials: true
  })
  app.use(cookieParser())
  await app.listen(3000)
}
bootstrap()
