import { Module } from '@nestjs/common';
import { TaskCrudService } from './task-crud.service';
import { TaskCrudController } from './task-crud.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TaskCrudController],
  providers: [TaskCrudService, PrismaService]
})
export class TaskCrudModule {}
