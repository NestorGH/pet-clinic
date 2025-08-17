import { ApiProperty } from "@nestjs/swagger";

export class InvoiceEntity {
    @ApiProperty()
    total: number

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
