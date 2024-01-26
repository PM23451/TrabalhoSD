import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('professores')
  getProfessores(): string {
    return this.appService.getProfessores();
  }

  @Get('crashes')
  getCrashes(): Promise<any[]> {
      return this.appService.getCrashes();
  }

  @Post('crashes')
  insertCrash(@Body() crash: any): Promise<string> {
      console.log("Crash Controller");
      console.log(crash);
      return this.appService.insertCrash(crash);
  }

  @Delete('crashes/:id')
  async deleteCrash(id: number): Promise<string> {
    return await this.appService.deleteCrash(id);
  }

  @Put('crashes/:id')
  async updateCrash(id: number, crash: any): Promise<string> {
    return await this.appService.updateCrash(id, crash);
  }


  
}
