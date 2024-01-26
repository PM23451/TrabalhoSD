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
    const crashes = await this.crashesService.findAll();
    return crashes;
  }
  async insertCrash(crash: any): Promise<string> {

    await this.crashesService.create(crash);
    return 'Crash inserido';
  }

  async deleteCrash(id: number): Promise<string> {
      await this.crashesService.delete(id);
      return 'Crash apagado';
  }

  async updateCrash(id: number, crash: any): Promise<string> {
      await this.crashesService.update(id, crash);
      return 'Crash atualizado';
  }

}
