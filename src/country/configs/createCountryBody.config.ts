import { ApiBodyOptions } from '@nestjs/swagger';

export const createCountryBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  },
};
