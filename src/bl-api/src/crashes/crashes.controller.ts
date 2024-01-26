import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CrashesService } from './crashes.service';

@Controller('crashes')
export class CrashesController {
    constructor(private readonly crashesService: CrashesService) {}

    @Get()
    async findAll() {
        return this.crashesService.findAll();
    }

    @Post()
    async create(@Body() crash: any) {
        return this.crashesService.create(crash);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.crashesService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() crash: any) {
        return this.crashesService.update(id, crash);
    }
}
