import { Test, TestingModule } from '@nestjs/testing';
import { CrashesController } from './crashes.controller';

describe('CrashesController', () => {
  let controller: CrashesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrashesController],
    }).compile();

    controller = module.get<CrashesController>(CrashesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
