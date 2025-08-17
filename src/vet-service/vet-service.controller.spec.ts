import { Test, TestingModule } from '@nestjs/testing';
import { VetServiceController } from './vet-service.controller';
import { VetServiceService } from './vet-service.service';

describe('VetServiceController', () => {
  let controller: VetServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetServiceController],
      providers: [VetServiceService],
    }).compile();

    controller = module.get<VetServiceController>(VetServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
