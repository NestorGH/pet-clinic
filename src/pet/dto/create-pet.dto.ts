import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsDecimal, IsInt, IsString } from "class-validator"

export class CreatePetDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    species: string

    @ApiProperty()
    @IsString()
    sex: string

    @ApiProperty()
    @IsString()
    breed: string

    @ApiProperty()
    @IsDate()
    birthDate: Date

    @ApiProperty()
    @IsString()
    color: string

    @ApiProperty()
    @IsString()
    feature: string

    @ApiProperty()
    @IsDecimal()
    weight: number

    @ApiProperty()
    @IsInt()
    status: number

    //record
}
