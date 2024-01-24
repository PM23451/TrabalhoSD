import { Test, TestingModule } from '@nestjs/testing';
import { CrashesService } from './crashes.service';

describe('CrashesService', () => {
  let service: CrashesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrashesService],
    }).compile();

    service = module.get<CrashesService>(CrashesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
