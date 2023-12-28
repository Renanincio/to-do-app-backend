import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDTO } from './dto/Task.DTO';

@Injectable()
export class TaskCrudService {
  constructor(private prisma: PrismaService) {}

  async create(data: TaskDTO, email: string) {

    const task = await this.prisma.task.create(
      {
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
      User: {
        connect: {
          email,
        }
      },
      }
    }
    );

    return task
}

  async findAll(email: string) {

    return await this.prisma.task.findMany({
      where: {
        User: {
          email,
        }
      }
    });

  }

  async findAllFavorites(email: string) {
    return await this.prisma.task.findMany({
      where: {
        favorite: true,
        User: {
          email,
        }
      },
    });
  }

  async findAllCompleted(email: string) {
    return await this.prisma.task.findMany({
      where: {
        completed: true,
        User: {
          email,
        }
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: TaskDTO) {
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

  async remove(id: string) {
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
