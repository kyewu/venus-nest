import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CreateCourseDto, CreateCourseWithTagsInterface } from './dto/create-course.dto';
import { CreateCoursesOnTagsDto } from './dto/create-course-tag.dto';
import { GetCoursesByTypeDto } from './dto/get-courses-by-type.dto';
import { transformObjToArr } from '@/utils/pagination';
import { PublicGetCoursesDto } from './dto/public-get-courses.dto';
@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) { }

  createCourse(dto: CreateCourseDto | CreateCourseWithTagsInterface) {
    return this.prisma.courses.create({ data: dto })
  }

  getCourseByType(dto: GetCoursesByTypeDto) {
    const skip = (dto.page - 1) * dto.size;
    const take = dto.size;
    return this.prisma.courseTypes.findMany(
      {
        where: {
          id: { in: dto.types }
        },
        include: {
          tags: {
            include: {
              courses: {
                include: {
                  course: {
                    include: {
                      users: true
                    }
                  }
                }
              }
            }
          }
        },
        orderBy: transformObjToArr(dto.order || {}),
        skip,
        take
      }
    )
  }

  // create course and tag and relation

  createCourseTag(dto: CreateCoursesOnTagsDto | CreateCoursesOnTagsDto[]) {
    if (Array.isArray(dto)) return this.prisma.courseOnTags.createMany({ data: dto })
    return this.prisma.courseOnTags.create({ data: dto })
  }

  // courseTags CRUD
  createTag(dto: CreateTagDto) {
    return this.prisma.courseTags.create({ data: dto })
  }

  updateTag(dto: UpdateTagDto) {
    return this.prisma.courseTags.update({ where: { id: dto.id }, data: dto })
  }

  getTag() {
    // get the relation types
    return this.prisma.courseTags.findMany(
      {
        include: {
          types: true
        }
      }
    )
  }

  deleteTag(id: number) {
    return this.prisma.courseTags.delete({ where: { id } })
  }

  // courseTypes CRUD
  createType(dto: CreateTypeDto) {
    return this.prisma.courseTypes.create({ data: dto })
  }

  updateType(dto: UpdateTypeDto) {
    return this.prisma.courseTypes.update({ where: { id: dto.id }, data: dto })
  }

  getType(id: number) {
    return this.prisma.courseTypes.findMany(
      {
        where: {
          id
        },
        include: {
          tags: true
        }
      }
    )
  }

  deleteType(id: number) {
    return this.prisma.courseTypes.delete({ where: { id } })
  }

}
