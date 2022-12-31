import { Body, Controller, Post, Put, ValidationPipe, UsePipes, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

// project imports
import { StatusService } from './status.service';

// configs
import { StatusWithAdvertisementsParam } from './configs/getStatusWitthAdvertisementsParam.config';
import { statusWithAdvertisementsResponse } from './configs/statusWithAdvertisements.config';
import { createStatusBody } from './configs/createStatusBody.config';
import StatusResponse from './configs/statusResponse.config';

// types
import { AddStatusInput } from 'src/types/graphql';

@Controller('/status')
@ApiTags('Status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post('create')
  @ApiOperation({ summary: 'Craete a status' })
  @ApiBody(createStatusBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(StatusResponse('object'))
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: AddStatusInput) {
    const { authorization } = request.headers;
    return this.statusService.addStatus(authorization, createDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Return statuses' })
  @ApiBearerAuth('access-token')
  @ApiResponse(StatusResponse('array'))
  @UsePipes(ValidationPipe)
  getStatuses(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.statusService.getStatuses(authorization);
  }

  @Get(':id')
  @ApiParam(StatusWithAdvertisementsParam)
  @ApiOperation({ summary: 'Return statuses' })
  @ApiBearerAuth('access-token')
  @ApiResponse(statusWithAdvertisementsResponse)
  @UsePipes(ValidationPipe)
  getStatusWithAdvertisement(@Req() request: Request, @Param('id') id: string) {
    const { authorization } = request.headers;
    return this.statusService.getStatus(authorization, id);
  }
}
