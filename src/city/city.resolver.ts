import { Request } from 'express';
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';

// project imports
import { CityService } from './city.service';

// types
import { AddCityInput, CityWithAdvertisementsInput } from 'src/types/graphql';

@Resolver('City')
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query('getCities')
  getCities(@Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.cityService.getCities(authorization);
  }

  @Query('getCitiesWithAdvertisements')
  getCitiesWithAdvertisements(
    @Args('cityWithAdvertisements') getCityInput: CityWithAdvertisementsInput,
    @Context('req') req: Request,
  ) {
    const { authorization } = req.headers;
    return this.cityService.getCityWithAdvertisements(authorization, getCityInput);
  }

  @Mutation('addCity')
  addNewCity(@Args('addCityInput') addCityInput: AddCityInput, @Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.cityService.addCity(authorization, addCityInput);
  }
}
