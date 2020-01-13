import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { GroupModule } from './group/group.module';
import { AccountModule } from './account/account.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/messanger'),
      MessageModule,
      GroupModule,
      AccountModule,
      DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
