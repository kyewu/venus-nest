import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { HomeResources } from 'generated/prisma';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Injectable()
export class HomeService {
  constructor(private readonly prisma: PrismaService) { }

  findMany(page: number = 1, size: number = 10): Promise<[HomeResources[], number]> {
    const skip = (page - 1) * size;
    const take = size;
    return this.prisma.$transaction(
      [
        this.prisma.homeResources.findMany({
          skip,
          take
        }),
        this.prisma.homeResources.count()
      ]
    )
  }

  create(body: CreateHomeDto): Promise<HomeResources> {
    return this.prisma.homeResources.create({
      data: body
    });
  }

  update(body: UpdateHomeDto): Promise<HomeResources> {
    return this.prisma.homeResources.update({
      where: { id: body.id },
      data: body
    });
  }

  delete(id: number): Promise<HomeResources> {
    return this.prisma.homeResources.delete({ where: { id } });
  }
}
