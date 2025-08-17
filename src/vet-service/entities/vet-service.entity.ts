import { ApiProperty } from "@nestjs/swagger";

export class VetServiceEntity {
    @ApiProperty()
    name: string

    @ApiProperty()
    description: string

    @ApiProperty()
    price: number

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
