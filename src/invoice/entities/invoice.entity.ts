import { ApiProperty } from "@nestjs/swagger";

export class InvoiceEntity {
    @ApiProperty()
    total: number

    @ApiProperty()
    clientId: number

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
