import { Injectable } from '@nestjs/common';
import { CreateVetServiceDto } from './dto/create-vet-service.dto';
import { UpdateVetServiceDto } from './dto/update-vet-service.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VetServiceService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createVetServiceDto: CreateVetServiceDto) {
    return await 'This action adds a new vetService';
  }

  async findAll() {
    return await `This action returns all vetService`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} vetService`;
  }

  async update(id: number, updateVetServiceDto: UpdateVetServiceDto) {
    return await `This action updates a #${id} vetService`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} vetService`;
  }
}
