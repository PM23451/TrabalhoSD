import { Injectable } from '@nestjs/common';
import {CrashesService} from "./crashes/crashes.service";

@Injectable()
export class AppService {
    //constructor(private crashesService: CrashesService) {}
  constructor(private crashesService: CrashesService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getProfessores(): string {
    return 'Professores';
  }

  async getCrashes(): Promise<any[]> {
    // Buscar do serviço de crashes
    const crashes = await this.crashesService.findAll();
    return crashes;
  }
}
