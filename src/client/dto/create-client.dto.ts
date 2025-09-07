import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsEmail, IsString, ValidateNested } from "class-validator"
import { CreatePetDto } from "../../pet/dto/create-pet.dto"

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

    @ApiProperty({ type: [CreatePetDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePetDto)
    pets: CreatePetDto[];
    
}
