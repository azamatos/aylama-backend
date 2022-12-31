import { ApiResponseOptions } from '@nestjs/swagger';

export const statusWithAdvertisementsResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns status with advertisements',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      advertisement: {
        type: 'array',
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
