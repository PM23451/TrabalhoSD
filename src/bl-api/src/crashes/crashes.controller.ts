import { Controller, Get } from '@nestjs/common';
import { CrashesService } from './crashes.service';

@Controller('crashes')
export class CrashesController {
    constructor(private readonly crashesService: CrashesService) {}

    @Get()
    async findAll() {
        return this.crashesService.findAll();
    }
}
