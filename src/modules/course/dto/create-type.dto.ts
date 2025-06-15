import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNumber()
  @IsOptional()
  order: number

  @IsNumber()
  @IsOptional()
  status: number
}