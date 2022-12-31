import { ApiBodyOptions } from '@nestjs/swagger';

export const getCityWithAdvertisementsBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      from: { type: 'boolean' },
      to: { type: 'boolean' },
    },
  },
};
