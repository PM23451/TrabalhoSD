import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { CrashesService } from "./crashes/crashes.service";

@Module({
  imports: [TeachersModule],
  controllers: [AppController],
  providers: [AppService, CrashesService],
})
export class AppModule {
  //Permitir Access-Control-Allow-Origin
    configure(consumer) {
        consumer.apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
        }).forRoutes('*');
    }
}

