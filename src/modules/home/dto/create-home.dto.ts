import {isNumber, IsString, IsOptional, IsUrl, IsIn, IsNumber} from 'class-validator'

export class CreateHomeDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  subTitle?: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsIn(['home', 'study'])
  module: string;

  @IsString()
  @IsIn(['avatar', 'image', 'project'])
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}