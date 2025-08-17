import { Injectable } from '@nestjs/common';
import { CreateVetServiceDto } from './dto/create-vet-service.dto';
import { UpdateVetServiceDto } from './dto/update-vet-service.dto';

@Injectable()
export class VetServiceService {
  create(createVetServiceDto: CreateVetServiceDto) {
    return 'This action adds a new vetService';
  }

  findAll() {
    return `This action returns all vetService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vetService`;
  }

  update(id: number, updateVetServiceDto: UpdateVetServiceDto) {
    return `This action updates a #${id} vetService`;
  }

  remove(id: number) {
    return `This action removes a #${id} vetService`;
  }
}
