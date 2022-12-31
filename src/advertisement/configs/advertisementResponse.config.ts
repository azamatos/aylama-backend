import { ApiResponseOptions } from '@nestjs/swagger';

const AdvertisementResponse = (mainType: string): ApiResponseOptions => {
  return {
    status: 200,
    description: 'Returns advertisement',
    schema: {
      type: mainType,
      properties: {
        id: { type: 'string' },
        h1: { type: 'string' },
        description: { type: 'string' },
        from: {
          type: 'object',
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
        to: {
          type: 'object',
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
        price: { type: 'number' },
        status: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            created_at: { type: 'string' },
            updated_at: { type: 'string' },
          },
        },
        isDeleted: { type: 'boolean' },
        startDate: { type: 'string' },
        endDate: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  };
};

export default AdvertisementResponse;
