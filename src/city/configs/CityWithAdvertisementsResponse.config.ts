import { ApiResponseOptions } from '@nestjs/swagger';

export const CityWithAdvertisementsResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns city with advertisements',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      country: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          created_at: { type: 'string' },
          updated_at: { type: 'string' },
        },
      },
      advertisementsFrom: {
        type: 'array',
        properties: {
          id: { type: 'string' },
          h1: { type: 'string' },
          description: { type: 'string' },
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
      advertisementTo: {
        type: 'array',
        properties: {
          id: { type: 'string' },
          h1: { type: 'string' },
          description: { type: 'string' },
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
      created_at: { type: 'string' },
      updated_at: { type: 'string' },
    },
  },
};
