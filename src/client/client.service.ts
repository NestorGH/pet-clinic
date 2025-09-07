import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createClientDto: CreateClientDto) {
    try {
      return await this.databaseService.client.create({
        data: {
          identification: createClientDto.identification,
          name: createClientDto.name,
          phone: createClientDto.phone,
          email: createClientDto.email,
          address: createClientDto.address,
          pet: {
            create: createClientDto.pets.map(pet => ({
              name: pet.name,
              species: pet.species,
              sex: pet.sex,
              breed: pet.breed,
              birthDate: pet.birthDate,
              color: pet.color,
              feature: pet.feature,
              weight: pet.weight,
              status: pet.status
            })) || []
          }
        }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('The identification already exists')
        }
      }
      throw error
    }
  }

  async findAll() {
    return await this.databaseService.client.findMany({
      include: { pet: true }
    });
  }

  async findOne(id: number) {
    const client = await this.databaseService.client.findUnique({
      where: { id },
      include: { pet: true }
    });
    if (!client) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      return await this.databaseService.client.update({
        where: { id },
        include: { pet: true },
        data: {
          name: updateClientDto.name,
          phone: updateClientDto.phone,
          email: updateClientDto.email,
          address: updateClientDto.address,
          pet: {
            update: updateClientDto.pets?.map(pet => ({
              where: { id: pet.id },
              data: {
                name: pet.name,
                species: pet.species,
                breed: pet.breed,
                color: pet.color,
                feature: pet.feature,
                weight: pet.weight,
                status: pet.status
              }
            })) || []
          }
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
    const client = await this.databaseService.client.findUnique({
      where: { id },
      include: { pet: true }
    });

    if (!client) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }

    await this.databaseService.pet.deleteMany({
      where: { ownerId: id },
    });
    await this.databaseService.client.delete({
      where: { id },
    });

    return client; // Return the deleted client/owner with pets
  }
}
