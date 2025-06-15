import { Body, Controller, Post, Get, Query, UseInterceptors, ClassSerializerInterceptor, SerializeOptions } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseWithTagsDto } from './dto/create-course.dto';
import { GetCoursesByTypeDto } from './dto/get-courses-by-type.dto';
import { BigIntTransformInterceptor } from '@/shared/interceptors/biginit-transform.interceptor';
import { PublicGetCoursesDto } from './dto/public-get-courses.dto';
import { Serialize } from '@/shared/decorators/serialize.decorator';

@Controller('course')
@UseInterceptors(BigIntTransformInterceptor)
export class CourseController {
  constructor(private courseSvc: CourseService) { }

  @Post()
  async createCourse(@Body() dto: CreateCourseWithTagsDto) {
    if (dto?.tags?.length) {
      const body = { ...dto, tags: { create: dto.tags.map(tag => ({ tagId: tag })) } }
      return await this.courseSvc.createCourse(body)
    }
    return await this.courseSvc.createCourse(dto)
  }

   @Get()
  @Serialize(PublicGetCoursesDto)
  async getCoursesByType(
    @Query() dto: GetCoursesByTypeDto,
  ): Promise<PublicGetCoursesDto[]> {
    const res = await this.courseSvc.getCourseByType(dto);
    if (res && res.length) {
      const data = res.map((o) => {
        return {
          id: o.id,
          name: o.name,
          courses: o.tags.reduce((prev, cur) => {
            return [...prev, ...cur.courses.map((o) => o.course)];
          }, []),
        };
      });
      console.log('1:',JSON.stringify(data));
      return data as any[];
    } else {
      return [];
    }
    // return dto;
  }
}
