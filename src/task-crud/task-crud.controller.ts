import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { TaskDTO } from './dto/Task.DTO';
import { TaskCrudService } from './task-crud.service';

@IsPublic()
@Controller('task')
export class TaskCrudController {
  constructor(
    private readonly taskCrudService: TaskCrudService,
    ) {}
  
  @Post()
  async create(@Body() createTaskCrudDto: TaskDTO, @Query('email') email: string) {
    return await this.taskCrudService.create(createTaskCrudDto, email);
  }

  @Get()
  async findAll(@Query('email') email: string) {
    return await this.taskCrudService.findAll(email);
  }

  @Get('favorites')
  async findAllFavorites(@Query('email') email: string) {
    return await this.taskCrudService.findAllFavorites(email);
  }

  @Get('completed')
  async findAllCompleted(@Query('email') email: string) {
    return await this.taskCrudService.findAllCompleted(email);
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskCrudService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskCrudDto: TaskDTO) {
    return await this.taskCrudService.update(id, updateTaskCrudDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskCrudService.remove(id);
  }
}
