import { Test, TestingModule } from '@nestjs/testing';
import { VetServiceService } from './vet-service.service';

describe('VetServiceService', () => {
  let service: VetServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetServiceService],
    }).compile();

    service = module.get<VetServiceService>(VetServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
