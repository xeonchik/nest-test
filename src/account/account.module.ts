import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import {DbModule} from '../db/db.module';

@Module({
  imports: [ DbModule ],
  controllers: [AccountController]
})
export class AccountModule {}
