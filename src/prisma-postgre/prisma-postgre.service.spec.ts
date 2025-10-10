import { Test, TestingModule } from '@nestjs/testing';
import { PrismaPostgreService } from './prisma-postgre.service';

describe('PrismaPostgreService', () => {
  let service: PrismaPostgreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaPostgreService],
    }).compile();

    service = module.get<PrismaPostgreService>(PrismaPostgreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
