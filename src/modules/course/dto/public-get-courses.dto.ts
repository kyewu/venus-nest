import { Exclude, Expose, Type } from 'class-transformer';

class UserDto {
  id: number;
  username: string;

  @Exclude()
  password: string;
  name: string;
  type: number;
  expired: string;
  status: number;
  phone: string;
  email: string;
  unionId: string;
  openId: string;
  createdAt: string;
  updatedAt: string;
}

class CourseDto {
  id: number;
  title: string;
  subTitle: string;
  desc: string;
  coverId: number;
  author: number;
  originPrice: number;
  price: number;
  status: number;
  counts: number;
  order: number;
  detail: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  @Type(() => UserDto)
  users: UserDto;
}


export class PublicGetCoursesDto {
  id: number;
  name: string;

  @Type(() => CourseDto)
  courses?: CourseDto[];
}
