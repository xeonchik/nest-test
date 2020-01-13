import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';
import { Message } from './interfaces/message.interface';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        console.info(createMessageDto.message);
        await this.messageService.create(createMessageDto);
    }

    @Get()
    async findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }
}
