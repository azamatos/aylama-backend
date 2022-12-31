import { Body, Controller, Post, Put, ValidationPipe, UsePipes, Req, Get, Param } from '@nestjs/common';
import { Request } from 'express';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

// project imports
import { AdvertisementService } from './advertisement.service';

// configs
import { createAdvertisementBody } from './configs/createAdvertisementBody.config';
import { updateAdvertisementBody } from './configs/updateAdvertisementBody';
import { AdvertisementParam } from './configs/getAdvertisementParam.config';
import AdvertisementResponse from './configs/advertisementResponse.config';

// types
import { AddAdvertisementInput, UpdateAdvertisementInput } from 'src/types/graphql';

@Controller('/advertisement')
@ApiTags('Advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create an advertisement' })
  @ApiBody(createAdvertisementBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(AdvertisementResponse('object'))
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: AddAdvertisementInput) {
    const { authorization } = request.headers;
    return this.advertisementService.createAdvertisement(authorization, createDto);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update an advertisement' })
  @ApiBody(updateAdvertisementBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(AdvertisementResponse('object'))
  @UsePipes(ValidationPipe)
  update(@Req() request: Request, @Body() updateDto: UpdateAdvertisementInput) {
    const { authorization } = request.headers;
    return this.advertisementService.updateAdvertisement(authorization, updateDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Return user advertisements' })
  @ApiBearerAuth('access-token')
  @ApiResponse(AdvertisementResponse('array'))
  @UsePipes(ValidationPipe)
  getOtherLists(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.advertisementService.getUserAdvertisements(authorization);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return an advertisement by id' })
  @ApiParam(AdvertisementParam)
  @ApiBearerAuth('access-token')
  @ApiResponse(AdvertisementResponse('object'))
  @UsePipes(ValidationPipe)
  getList(@Req() request: Request, @Param('id') id: string) {
    const { authorization } = request.headers;
    return this.advertisementService.findAdvertisement(authorization, id);
  }
}
