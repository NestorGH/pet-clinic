import { PartialType } from '@nestjs/swagger';
import { CreateVetServiceDto } from './create-vet-service.dto';

export class UpdateVetServiceDto extends PartialType(CreateVetServiceDto) {}
