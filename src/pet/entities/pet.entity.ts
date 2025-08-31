import { ApiProperty } from "@nestjs/swagger";

export class PetEntity {
    @ApiProperty()
    name: string

    @ApiProperty()
    species: string

    @ApiProperty()
    sex: string

    @ApiProperty()
    breed: string

    @ApiProperty()
    birthDate: Date

    @ApiProperty()
    color: string

    @ApiProperty()
    feature: string

    @ApiProperty()
    weight: number

    @ApiProperty()
    status: number

    //TODO: RECORD

    //appointment

    @ApiProperty()
    ownerId: number

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
