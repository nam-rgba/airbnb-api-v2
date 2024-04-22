import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
// import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/schema/user.entity'

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URL,
      database: 'nest_v1',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [User],
      useUnifiedTopology: true
    })
    // CorsModule.forRoot({
    //   origin: ['http://localhost:5173'], // Allow requests from this origin
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    //   allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
    // })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
