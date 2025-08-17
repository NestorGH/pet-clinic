import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal } from "class-validator";

export class CreateInvoiceDto {
    @ApiProperty()
    @IsDecimal()
    total: number
}
