import { Module } from '@nestjs/common';
import { TaskCrudModule } from './task-crud/task-crud.module';

@Module({
  imports: [TaskCrudModule],
})
export class AppModule {}
