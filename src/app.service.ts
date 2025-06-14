import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { HomeResources } from 'generated/prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): Promise<HomeResources[]> {
    const res = this.prisma.homeResources.findMany();
    console.log('res', res);
    return res;
  }
}
