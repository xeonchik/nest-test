import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const createdMessage = new this.messageModel(createMessageDto);
        return await createdMessage.save();
    }

    async findAll(): Promise<Message[]> {
        return await this.messageModel.find().exec();
    }
}
