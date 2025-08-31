import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppointmentDto } from './create-appoointment.dto';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {

}