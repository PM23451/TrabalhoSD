import { Module } from '@nestjs/common';
import { CrashesService } from './crashes.service';
import { CrashesController } from './crashes.controller';

@Module({
  providers: [CrashesService],
  controllers: [CrashesController]
})
export class CrashesModule {}
