import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetServiceService } from './vet-service.service';
import { CreateVetServiceDto } from './dto/create-vet-service.dto';
import { UpdateVetServiceDto } from './dto/update-vet-service.dto';

@Controller('vet-service')
export class VetServiceController {
  constructor(private readonly vetServiceService: VetServiceService) {}

  @Post()
  create(@Body() createVetServiceDto: CreateVetServiceDto) {
    return this.vetServiceService.create(createVetServiceDto);
  }

  @Get()
  findAll() {
    return this.vetServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetServiceDto: UpdateVetServiceDto) {
    return this.vetServiceService.update(+id, updateVetServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetServiceService.remove(+id);
  }
}
