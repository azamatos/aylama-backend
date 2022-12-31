import { ApiBodyOptions } from '@nestjs/swagger';

export const updateAdvertisementBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      h1: { type: 'string' },
      description: { type: 'string' },
      fromCityId: { type: 'string' },
      toCityId: { type: 'string' },
      startDate: { type: 'string' },
      endDate: { type: 'string' },
      price: { type: 'number' },
      statusId: { type: 'string' },
      isDeleted: { type: 'string' },
    },
  },
};
