import { ApiBodyOptions } from '@nestjs/swagger';

export const UserBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      phone_number: { type: 'string' },
    },
  },
};
