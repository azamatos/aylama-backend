import { ApiBodyOptions } from '@nestjs/swagger';

export const createCityBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      countryId: { type: 'string' },
    },
  },
};
