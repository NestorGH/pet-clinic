import { Module } from '@nestjs/common';
import { VetServiceService } from './vet-service.service';
import { VetServiceController } from './vet-service.controller';

@Module({
  controllers: [VetServiceController],
  providers: [VetServiceService],
})
export class VetServiceModule {}
