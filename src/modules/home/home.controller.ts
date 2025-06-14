import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Controller('home')
export class HomeController {

  constructor(private readonly homeSvc: HomeService) {
    // Constructor logic if needed
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.homeSvc.delete(id);
  }

  @Get()
  async find(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number
  ) {
    const [homeResources, total] = await this.homeSvc.findMany(page, size);
    return {
      data: homeResources,
      total,
      page,
      size
    };
  }

  @Post()
  create(@Body() dto: CreateHomeDto) {
    return this.homeSvc.create(dto);
  }

  @Put()
  update(@Body() dto: UpdateHomeDto) {
    return this.homeSvc.update(dto);
  }
}
