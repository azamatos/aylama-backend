import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

// types
import { AddStatusInput } from 'src/types/graphql';

const citySelector = {
  id: true,
  name: true,
  country: {
    select: {
      id: true,
      name: true,
    },
  },
};

const basicSelector = {
  id: true,
  name: true,
  created_at: true,
  updated_at: true,
};

const advertisementSelector = {
  id: true,
  name: true,
  created_at: true,
  updated_at: true,
  advertisements: {
    select: {
      id: true,
      h1: true,
      description: true,
      from: {
        select: citySelector,
      },
      to: {
        select: citySelector,
      },
      startDate: true,
      endDate: true,
      created_at: true,
      updated_at: true,
    },
  },
};

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  async addStatus(token: string, data: AddStatusInput) {
    try {
      const status = await this.prisma.status.create({
        data,
        select: basicSelector,
      });

      return status;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong credentials');
    }
  }

  async getStatus(token: string, id: string) {
    try {
      const status = await this.prisma.status.findUnique({
        where: { id },
        select: advertisementSelector,
      });

      return status;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong id');
    }
  }

  async getStatuses(token: string) {
    try {
      const statuses = await this.prisma.status.findMany({
        select: basicSelector,
      });

      return statuses;
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong token data');
    }
  }
}
