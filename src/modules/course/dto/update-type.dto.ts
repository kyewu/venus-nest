import { OmitType } from "@nestjs/mapped-types";
import { CreateTypeDto } from "./create-type.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateTypeDto extends CreateTypeDto {
  @IsNotEmpty()
  @IsNumber()
  id: number
}