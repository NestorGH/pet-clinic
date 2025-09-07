import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDecimal, IsInt, ValidateNested } from "class-validator";
import { CreateAppointmentDto } from "../../appointment/dto/create-appoointment.dto";

export class CreateInvoiceDto {
    @ApiProperty()
    @IsDecimal()
    total: number

    @ApiProperty()
    @IsInt()
    clientId: number

    @ApiProperty({ type: [CreateAppointmentDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAppointmentDto)
    appointments: CreateAppointmentDto[];
}
