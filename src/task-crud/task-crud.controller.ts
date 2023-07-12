import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskCrudService } from './task-crud.service';
import { TaskDTO } from './dto/Task.DTO';

@Controller('task')
export class TaskCrudController {
  constructor(private readonly taskCrudService: TaskCrudService) {}

  @Post()
  async create(@Body() createTaskCrudDto: TaskDTO) {
    return await this.taskCrudService.create(createTaskCrudDto);
  }

  @Get()
  async findAll() {
    return await this.taskCrudService.findAll();
  }

  @Get('favorites')
  async findAllFavorites() {
    return await this.taskCrudService.findAllFavorites();
  }

  @Get('completed')
  async findAllCompleted() {
    return await this.taskCrudService.findAllCompleted();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.taskCrudService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTaskCrudDto: TaskDTO) {
    return await this.taskCrudService.update(+id, updateTaskCrudDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.taskCrudService.remove(+id);
  }
}
