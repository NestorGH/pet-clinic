import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsDecimal, IsInt, IsNumber, IsString } from "class-validator"

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
    invoiceId: number

}