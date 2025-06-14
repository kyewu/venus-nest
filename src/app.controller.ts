import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HomeResources } from 'generated/prisma';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<HomeResources[]> {
    return this.appService.getHello();
  }
}
