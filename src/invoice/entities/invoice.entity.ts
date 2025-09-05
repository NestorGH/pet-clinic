import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { CreateAppointmentDto } from "src/appointment/dto/create-appoointment.dto";

export class InvoiceEntity {
    @ApiProperty()
    total: number

    @ApiProperty()
    clientId: number

    @ApiProperty({ type: [CreateAppointmentDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAppointmentDto)
    appointments: CreateAppointmentDto[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
