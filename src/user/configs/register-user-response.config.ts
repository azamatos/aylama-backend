import { ApiResponseOptions } from '@nestjs/swagger';

export const RegisterUserResponse: ApiResponseOptions = {
  status: 201,
  description: 'Returns registered user',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      phone_number: { type: 'string' },
    },
  },
};
