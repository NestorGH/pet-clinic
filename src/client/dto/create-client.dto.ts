import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class CreateClientDto {
    @ApiProperty()
    @IsString()
    identification: string

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    phone: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    address: string
}
