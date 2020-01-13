import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DataDuplicationError } from './errors/data.duplication.error';

@Injectable()
export class DbService {
    constructor(
        @InjectModel('Account') private readonly accountModel: Model,
        @InjectModel('Group') private readonly groupModel: Model
    ) {
    }
    async createGroup(dataObject) {
        const group = new this.groupModel(dataObject);
        return group.save();
    }

    /**
     * Create an account
     * @param data
     * @return Promise<Account>
     */
    async createAccount(data) {
        const result = await this.getAccount(data.login);
        if (result) {
            throw new DataDuplicationError('Account is duplicated');
        }
        const account = new this.accountModel(data);
        return account.save();
    }

    /**
     * Get account from storage
     * @param nameInput
     */
    async getAccount(nameInput: string) {
        return this.accountModel.findOne({ login: nameInput }).exec();
    }
}
