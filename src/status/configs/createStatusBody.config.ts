import { ApiBodyOptions } from '@nestjs/swagger';

export const createStatusBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  },
};
