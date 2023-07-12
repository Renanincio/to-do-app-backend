import { PrismaService } from 'src/database/PrismaService';
import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/Task.DTO';

@Injectable()
export class TaskCrudService {
  constructor(private prisma: PrismaService) {}

  async create(data: TaskDTO) {
    const taskExists = await this.prisma.task.findFirst({
      where: {
        id: data.id,
      },
    });

    if (taskExists) {
      throw new Error('task already exists');
    }

    const task = await this.prisma.task.create({
      data,
    });

    return task;
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findAllFavorites() {
    return await this.prisma.task.findMany({
      where: {
        favorite: true,
      },
    });
  }

  async findAllCompleted() {
    return await this.prisma.task.findMany({
      where: {
        completed: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: TaskDTO) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('task does not exists!');
    }

    return await this.prisma.task.update({
      data,
      where: { id: id },
    });
  }

  async remove(id: number) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('Book does not exists!');
    }

    return await this.prisma.task.delete({
      where: { id },
    });
  }
}
