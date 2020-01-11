import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/messanger'),
      MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
