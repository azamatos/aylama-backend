import { ApiResponseOptions } from '@nestjs/swagger';

const CityResponse = (mainType: string): ApiResponseOptions => {
  return {
    status: 200,
    description: 'Returns city',
    schema: {
      type: mainType,
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        country: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            created_at: { type: 'string' },
            updated_at: { type: 'string' },
          },
        },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  };
};

export default CityResponse;
