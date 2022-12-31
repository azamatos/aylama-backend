import { Request } from 'express';
import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';

// project imports
import { CountryService } from './country.service';

// types
import { AddCountryInput } from 'src/types/graphql';

@Resolver('Country')
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query('getCountries')
  getCountries(@Args('token') token: string) {
    return this.countryService.getCountries(token);
  }

  @Mutation('addCountry')
  addNewCountry(@Args('addCountryInput') addCountryInput: AddCountryInput, @Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.countryService.addCountry(authorization, addCountryInput);
  }
}
