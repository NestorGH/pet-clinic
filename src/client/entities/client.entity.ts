import { ApiProperty } from "@nestjs/swagger";

export class ClientEntity {
    @ApiProperty()
    identification: string

    @ApiProperty()
    name: string

    @ApiProperty()
    phone: string

    @ApiProperty()
    email: string

    @ApiProperty()
    address: string

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
