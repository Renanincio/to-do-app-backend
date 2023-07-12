import { Test, TestingModule } from '@nestjs/testing';
import { TaskCrudService } from './task-crud.service';

describe('TaskCrudService', () => {
  let service: TaskCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskCrudService],
    }).compile();

    service = module.get<TaskCrudService>(TaskCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
