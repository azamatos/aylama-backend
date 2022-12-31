import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

// types
import { AddCityInput, CityWithAdvertisementsInput } from 'src/types/graphql';

const advertisementSelector = {
  id: true,
  h1: true,
  description: true,
  status: {
    select: {
      id: true,
      name: true,
      created_at: true,
      updated_at: true
    }
  },
  startDate: true,
  endDate: true,
  created_at: true,
  updated_at: true
}

const basicSelector = {
  id: true,
  name: true,
  created_at: true,
  updated_at: true
}

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  
  async addCity(token: string, data: AddCityInput) {
    try {
      const City = await this.prisma.city.create({
        data, 
        select: {
          ...basicSelector,
          country: {
            select: basicSelector
          }
        }
      })  
      
      return City

    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong credentials');
    }
  }

  async getCityWithAdvertisements(token: string, {id, from, to}:CityWithAdvertisementsInput ) {
    try {
      const cities = await this.prisma.city.findMany({
        where: {id}, 
        select: {
          ...basicSelector,
          advertisementsFrom: from && {select: advertisementSelector},
          advertisementsTo: to && {select: advertisementSelector}
        }
      })

      return cities
    } catch (err) {
      console.log(err)
      throw new BadRequestException('Wrong token data')
    }
  }

  async getCities(token: string) {
    try {
      const cities = await this.prisma.city.findMany(
        {
          select: {
            ...basicSelector,
            country: {
              select: basicSelector
            }
          }
        }
      )

      return cities
    } catch (err) {
      console.log(err)
      throw new BadRequestException('Wrong token data')
    }
  }
}
