import {Body, Controller, HttpException, Post} from '@nestjs/common';
import {CreateAccountDto} from './dto/create-account.dto';
import {DbService} from '../db/db.service';
import {DataDuplicationError} from '../db/errors/data.duplication.error';

@Controller('account')
export class AccountController {
    constructor(private readonly dbService: DbService) {
    }
    @Post()
    async create(@Body() accountData: CreateAccountDto) {
        accountData.createdAt = new Date();

        try {
            return await this.dbService.createAccount(accountData);
        } catch (e) {
            if (e instanceof DataDuplicationError) {
                throw new HttpException('Account `' + accountData.login + '` already exists', 409);
            }
            throw e;
        }
    }
}
