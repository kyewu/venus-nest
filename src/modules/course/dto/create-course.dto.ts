// import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  // ValidateNested,
} from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  @IsOptional()
  desc: string;

  @IsNumber()
  @IsOptional()
  coverId: number;

  @IsNumber()
  @IsNotEmpty()
  author: number;

  @IsNumber()
  @IsOptional()
  originPrice: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNumber()
  @IsOptional()
  counts: number;

  @IsNumber()
  @IsOptional()
  order: number;

  @IsString()
  @IsOptional()
  detail: string;

  @IsString()
  @IsOptional()
  type: string;
}

export class CreateCourseWithTagsDto extends CreateCourseDto {
  // @Type(() => CreateCoursesOnTagsDto)
  // @ValidateNested({ each: true })
  // tags: CreateCoursesOnTagsDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  tags: number[];
}

export class CreateCourseWithTagsInterface extends CreateCourseDto {
  tags: {
    create: Array<{
      tagId: number;
    }>
  }
}