import { ApiProperty } from "@nestjs/swagger"
import { IsDecimal, IsString } from "class-validator"

export class CreateVetServiceDto {

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsDecimal()
    price: number
}
