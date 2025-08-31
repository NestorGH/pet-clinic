import { ApiProperty } from "@nestjs/swagger";

export class AppointmentEntity {
    @ApiProperty()
    appointmentDate: Date

    @ApiProperty()
    status: string

    @ApiProperty()
    vetId: number

    @ApiProperty()
    petId: number

    @ApiProperty()
    invoiceId: number

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}
