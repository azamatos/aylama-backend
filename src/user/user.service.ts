import { BadRequestException, Injectable } from '@nestjs/common';

// third party
import * as jwt from 'jsonwebtoken';

// project imports
import { PrismaService } from '../prisma/prisma.service';

// types
import { UserInput } from '../types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async register({ name, phone_number }: UserInput) {
    try {
      const user = await this.prisma.user.create({
        data: { phone_number, name },
      });
      console.log(user);
      return user;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(
        'Wrong credential structure or user already exists',
      );
    }
  }

  async login(userData: UserInput) {
    try {
      const { id, phone_number } = await this.prisma.user.findUnique({
        where: { phone_number: userData.phone_number },
      });

      const token = jwt.sign({ id, phone_number }, process.env.SECRET);
      return {
        token,
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException('Wrong credentials');
    }
  }

}
