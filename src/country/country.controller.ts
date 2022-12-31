import { Body, Controller, Post, Put, ValidationPipe, UsePipes, Req, Get } from '@nestjs/common';
import { Request } from 'express';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

// project imports
import { CountryService } from './country.service';

// types
import { AddCountryInput } from 'src/types/graphql';
import { createCountryBody } from './configs/createCountryBody.config';
import CountryResponse from './configs/CountryResponse.config';

@Controller('/country')
@ApiTags('Country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post('create')
  @ApiOperation({ summary: 'Craete a country' })
  @ApiBody(createCountryBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(CountryResponse('object'))
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: AddCountryInput) {
    const { authorization } = request.headers;
    return this.countryService.addCountry(authorization, createDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Return countries' })
  @ApiBearerAuth('access-token')
  @ApiResponse(CountryResponse('array'))
  @UsePipes(ValidationPipe)
  getCities(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.countryService.getCountries(authorization);
  }
}
