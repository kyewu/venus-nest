import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  typeId: number

  @IsNumber()
  @IsOptional()
  order: number

  @IsNumber()
  @IsOptional()
  status: number
}