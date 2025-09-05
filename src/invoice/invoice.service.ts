import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class InvoiceService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      const client = await this.databaseService.client.findUnique({
        where: { id: createInvoiceDto.clientId }
      });

      if (!client) {
        throw new BadRequestException(`Client with ID ${createInvoiceDto.clientId} not found`);
      }
      return await this.databaseService.invoice.create({
        include: {appointment: true},
        data: {
          total: createInvoiceDto.total,
          clientId: createInvoiceDto.clientId,
          appointment: {
            create: createInvoiceDto.appointments.map(appointment => ({
              appointmentDate: appointment.appointmentDate,
              status: appointment.status,
              vetId: appointment.vetId,
              petId: appointment.petId,
              serviceId: appointment.serviceId
            })) || []
          }
        }
      });

    } catch (error) {
      // If the error is already a BadRequestException (from our check), rethrow it
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Something bad happened while creating the invoice');
    }
  }

  async findAll() {
    return await this.databaseService.invoice.findMany({
      include: { client: true }
    });
  }

  async findOne(id: number) {
    const invoice = await this.databaseService.invoice.findUnique({
      where: { id },
      include: { client: true }
    });
    if (!invoice) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }
    return invoice;

  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    try {
      return await this.databaseService.invoice.update({
        where: { id },
        data: {
          total: updateInvoiceDto.total,
          clientId: updateInvoiceDto.clientId
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
    const invoice = await this.databaseService.invoice.findUnique({
      where: {id},
      include: {client: true}
    })

    if (!invoice) {
      throw new NotFoundException('The record with the specified ID does not exist or has been deleted.');
    }

    await this.databaseService.invoice.delete({
      where: { id },
    });

    return invoice;
  }
}
