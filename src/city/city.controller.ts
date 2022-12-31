import { Body, Controller, Post, ValidationPipe, UsePipes, Req, Get, Param } from '@nestjs/common';
import { Request } from 'express';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

// project imports
import { CityService } from './city.service';

//configs
import { CityWithAdvertisementsResponse } from './configs/CityWithAdvertisementsResponse.config';
import { getCityWithAdvertisementsBody } from './configs/GetCityWithAdvertisementsBody.config';
import { createCityBody } from './configs/createCityBody.config';
import CityResponse from './configs/CityResponse.config';

// types
import { AddCityInput, CityWithAdvertisementsInput } from 'src/types/graphql';

@Controller('/city')
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a city' })
  @ApiBody(createCityBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(CityResponse('object'))
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: AddCityInput) {
    const { authorization } = request.headers;
    return this.cityService.addCity(authorization, createDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Return all cities' })
  @ApiBearerAuth('access-token')
  @ApiResponse(CityResponse('array'))
  @UsePipes(ValidationPipe)
  getCities(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.cityService.getCities(authorization);
  }

  @Get('advertisements')
  @ApiOperation({ summary: 'Return city advertisements' })
  @ApiBody(getCityWithAdvertisementsBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(CityWithAdvertisementsResponse)
  @UsePipes(ValidationPipe)
  getWithAdvertisements(@Req() request: Request, cityInput: CityWithAdvertisementsInput) {
    const { authorization } = request.headers;
    return this.cityService.getCityWithAdvertisements(authorization, cityInput);
  }
}
