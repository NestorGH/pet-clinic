import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsDecimal, IsInt, IsNumber, IsString, ValidateNested } from "class-validator"
import { CreateVetServiceDto } from "src/vet-service/dto/create-vet-service.dto"

export class CreateAppointmentDto {
    @ApiProperty()
    @IsDate()
    appointmentDate: Date

    @ApiProperty()
    @IsString()
    status: string

    @ApiProperty()
    @IsInt()
    vetId: number

    @ApiProperty()
    @IsInt()
    petId: number

    @ApiProperty()
    @IsInt()
    serviceId: number;

}