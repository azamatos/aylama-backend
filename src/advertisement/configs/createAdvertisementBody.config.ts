import { ApiBodyOptions } from '@nestjs/swagger';

export const createAdvertisementBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      h1: { type: 'string' },
      description: { type: 'string' },
      fromCityId: { type: 'string' },
      toCityId: { type: 'string' },
      startDate: { type: 'string' },
      endDate: { type: 'string' },
      price: { type: 'number' },
    },
  },
};
