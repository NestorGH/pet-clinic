import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ClientEntity } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiBody({type: CreateClientDto})
  @ApiCreatedResponse({type: ClientEntity})
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiOkResponse({type: ClientEntity, isArray: true})
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ClientEntity})
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({type: UpdateClientDto})
  @ApiOkResponse({type: ClientEntity})
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ClientEntity})
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
