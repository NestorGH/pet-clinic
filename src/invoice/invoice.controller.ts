import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { InvoiceEntity } from './entities/invoice.entity';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @ApiBody({type: CreateInvoiceDto})
  @ApiCreatedResponse({type: InvoiceEntity})
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  @ApiOkResponse({type: InvoiceEntity})
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: InvoiceEntity})
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({type: UpdateInvoiceDto})
  @ApiOkResponse({type: InvoiceEntity})
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: InvoiceEntity})
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }
}
