import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {GroupSchema} from './schemas/group.schema';
import {AccountSchema} from './schemas/accout.schema';
import { DbService } from './db.service';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Account', schema: AccountSchema },
        { name: 'Group', schema: GroupSchema },
    ])],
    providers: [ DbService ],
    exports: [ DbService ]
})
export class DbModule {}
