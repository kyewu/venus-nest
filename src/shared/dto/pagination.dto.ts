import { Type } from "class-transformer";
import { IsNumber, IsOptional, Validate, ValidateNested } from "class-validator";
import { IsValidValueInArr } from "../decorators/is-valid-value-in-arr.decorator";

class Order {
  [key: string]: 'asc' | 'desc'
}
export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  size: number = 10;

  @Type(() => Order)
  @ValidateNested()
  @IsValidValueInArr(['asc', 'desc'])
  order: Order = { order: 'asc' }
}