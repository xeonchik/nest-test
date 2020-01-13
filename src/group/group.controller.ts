import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateGroupDto } from './dto/create-group.dto';
import {DbService} from '../db/db.service';

@Controller('group')
export class GroupController {
    constructor(private readonly dbService: DbService) {
    }

    @Get()
    async getGroupInfo(@Req() request: Request) {
        return 'This action returns group info';
    }
    @Post()
    async createGroup(@Body() createGroupDto: CreateGroupDto) {
        return await this.dbService.createGroup(createGroupDto);
    }
}
