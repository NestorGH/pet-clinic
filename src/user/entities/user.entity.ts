import { ApiProperty } from "@nestjs/swagger"

export class UserEntity {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string

    @ApiProperty()
    password: string

    @ApiProperty()
    role: string

    //appointment: CreateAppointmentDto[]

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
