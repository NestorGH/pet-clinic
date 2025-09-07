import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVetServiceDto } from './dto/create-vet-service.dto';
import { UpdateVetServiceDto } from './dto/update-vet-service.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VetServiceService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createVetServiceDto: CreateVetServiceDto) {
    try {
      return await this.databaseService.service.create({
        data: {
          name: createVetServiceDto.name,
          description: createVetServiceDto.description,
          price: createVetServiceDto.price
        }
      });
    } catch (error) {
      throw new BadRequestException('something bad happened')
    }
  }

  async findAll() {
    return await this.databaseService.service.findMany();
  }

  async findOne(id: number) {
    const vetService = await this.databaseService.service.findUnique({ where: { id } });

    if (!vetService) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }
    return vetService;
  }

  async update(id: number, updateVetServiceDto: UpdateVetServiceDto) {
    try {
      return await this.databaseService.service.update({
        where: { id },
        data: {
          name: updateVetServiceDto.name,
          description: updateVetServiceDto.description,
          price: updateVetServiceDto.price
        }
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const vetService = await this.databaseService.service.findUnique({where: {id}});
    if (!vetService) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }

    await this.databaseService.service.delete({
      where: { id },
    });
    return vetService;
  }
}
