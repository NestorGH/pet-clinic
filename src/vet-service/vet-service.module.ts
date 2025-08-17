import { Module } from '@nestjs/common';
import { VetServiceService } from './vet-service.service';
import { VetServiceController } from './vet-service.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [VetServiceController],
  providers: [VetServiceService],
  imports: [DatabaseModule]
})
export class VetServiceModule {}
