import { Request } from 'express';
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';

// project imports
import { AdvertisementService } from './advertisement.service';

// types
import { AddAdvertisementInput, UpdateAdvertisementInput } from '../types/graphql';

@Resolver('Advertisement')
export class AdvertisementResolver {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Mutation('addAdvertisement')
  addAdvertisement(@Args('advertisementInput') advertisementInput: AddAdvertisementInput,
  @Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.advertisementService.createAdvertisement(authorization,advertisementInput);
  }

  @Mutation('updateAdvertisement')
  updateAdvertisement(
    @Args('advertisementInput') advertisementInput: UpdateAdvertisementInput,
    @Context('req') req: Request) {
    const { authorization } = req.headers
    return this.advertisementService.updateAdvertisement(authorization, advertisementInput);
  }

  @Query('getAdvertisement')
  getAdvertisement(@Args('id') id: string, @Context('req') req: Request) {
    const {authorization} = req.headers
    return this.advertisementService.findAdvertisement(authorization,id);
    }

  @Query('getUserAdvertisements')
  getUserAdvertisements(@Args('token') token: string) {
    return this.advertisementService.getUserAdvertisements(token)
  }

}
