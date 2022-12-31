import { BadRequestException, Injectable } from '@nestjs/common';

// third party
import { getUser } from 'src/utils/token';

// project imports
import { PrismaService } from '../prisma/prisma.service';

// types
import { AddAdvertisementInput, UpdateAdvertisementInput } from '../types/graphql';

const basicSelector = {
    id:true, h1: true, description: true, from: {
      select: {
        id: true, name: true
      },
    },
    to: {
      select: {
        id: true,
        name: true
      }
    },
    price: true,
    status: {
      select: {
        id: true,
        name: true
      }
    },
    isDeleted: true,
    created_at: true,
    updated_at: true
  }


@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}
  async createAdvertisement(token: string,newData: AddAdvertisementInput) {
    try {
      const user = getUser(token)

      const status = await this.prisma.status.findFirst({
        where:{name:"created"}
      })
      const advertisement = await this.prisma.advertisement.create({
        data: {userId: user.id, statusId: status.id, isDeleted: false, ...newData },
        select: basicSelector
      })
      return advertisement
    }catch(err) {
      console.log(err);
          throw new BadRequestException('Wrong credentials');
    }
}

async getUserAdvertisements(token: string) {
  try {
    const user = getUser(token)
    const advertisements = await this.prisma.advertisement.findMany({
      where:{ userId: user.id },
      select: basicSelector      
    })
    return advertisements
  }catch(err) {
    console.log(err);
        throw new BadRequestException('Wrong credentials');
  }
}

async updateAdvertisement(token: string,{id, ...restData}: UpdateAdvertisementInput) {
  try {
    const advertisement = this.findAdvertisement(token, id)

    if (advertisement) {
      const updatedAdvertisement = await this.prisma.advertisement.update({
        where:{ id },
        data: restData,
        select: basicSelector      
      })
      return updatedAdvertisement
    }
  } catch(err) {
    console.log(err);
        throw new BadRequestException('Wrong credentials');
  }

  throw new BadRequestException('Please check ur input data');
}

  async findAdvertisement(token: string, id: string) {
    const user = getUser(token)
    try {
      return await this.prisma.advertisement.findFirst({
        where: {
          id,
          userId: user.id,
        },
        select: basicSelector
      });
    } catch (err) {
      throw new BadRequestException('U have no rights for this advertisement');
    }
  }

}
