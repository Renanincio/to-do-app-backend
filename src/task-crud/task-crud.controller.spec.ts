import { Test, TestingModule } from '@nestjs/testing';
import { TaskCrudController } from './task-crud.controller';
import { TaskCrudService } from './task-crud.service';

describe('TaskCrudController', () => {
  let controller: TaskCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskCrudController],
      providers: [TaskCrudService],
    }).compile();

    controller = module.get<TaskCrudController>(TaskCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
