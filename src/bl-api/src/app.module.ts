import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { CrashesService } from "./crashes/crashes.service";

@Module({
  imports: [TeachersModule],
  controllers: [AppController],
  providers: [AppService, CrashesService], // Registre CrashesService como um provedor aqui
})
export class AppModule {}

