import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsInt } from "class-validator";

export class CreateInvoiceDto {
    @ApiProperty()
    @IsDecimal()
    total: number

    @ApiProperty()
    @IsInt()
    clientId: number
}
