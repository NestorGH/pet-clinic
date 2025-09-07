import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsString } from 'class-validator';
import { UpdatePetDto } from '../../pet/dto/update-pet.dto';

export class UpdateClientDto {
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

    @ApiProperty({ type: [UpdatePetDto] })
    pets: UpdatePetDto[];
}
