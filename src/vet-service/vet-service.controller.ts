import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetServiceService } from './vet-service.service';
import { CreateVetServiceDto } from './dto/create-vet-service.dto';
import { UpdateVetServiceDto } from './dto/update-vet-service.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { VetServiceEntity } from './entities/vet-service.entity';

@Controller('vet-service')
export class VetServiceController {
  constructor(private readonly vetServiceService: VetServiceService) { }

  @Post()
  @ApiBody({ type: CreateVetServiceDto })
  @ApiOkResponse({ type: VetServiceEntity })
  create(@Body() createVetServiceDto: CreateVetServiceDto) {
    return this.vetServiceService.create(createVetServiceDto);
  }

  @Get()
  @ApiOkResponse({ type: VetServiceEntity, isArray: true })
  findAll() {
    return this.vetServiceService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: VetServiceEntity })
  findOne(@Param('id') id: string) {
    return this.vetServiceService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateVetServiceDto })
  @ApiOkResponse({ type: VetServiceEntity })
  update(@Param('id') id: string, @Body() updateVetServiceDto: UpdateVetServiceDto) {
    return this.vetServiceService.update(+id, updateVetServiceDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: VetServiceEntity })
  remove(@Param('id') id: string) {
    return this.vetServiceService.remove(+id);
  }
}
