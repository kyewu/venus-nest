import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateHomeDto } from "./create-home.dto";
import { OmitType } from "@nestjs/mapped-types";

export class UpdateHomeDto extends OmitType(CreateHomeDto, ['title']) implements CreateHomeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  title: string
}