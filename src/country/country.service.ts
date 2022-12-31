import { BadRequestException, Injectable } from '@nestjs/common';

// project imports
import { PrismaService } from '../prisma/prisma.service';

// types
import { AddCountryInput } from 'src/types/graphql';

const basicSelector = {
  id: true,
  name: true,
  cities: {
    select: {
      id: true,
      name: true,
      created_at: true,
      updated_at: true
    }
  },
  created_at: true,
  updated_at: true
}

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}
  
  async addCountry(token: string,data: AddCountryInput) {
    try {
      const country = await this.prisma.country.create({
        data,
        select: basicSelector
      })  
      
      return country

    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong credentials');
    }
  }

  async getCountries(token: string) {
    try {
      const countries = await this.prisma.country.findMany({
        select: basicSelector
      })

      return countries
    } catch (err) {
      console.log(err)
      throw new BadRequestException('Wrong token data')
    }
  }
}
