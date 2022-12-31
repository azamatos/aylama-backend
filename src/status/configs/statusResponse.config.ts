import { ApiResponseOptions } from '@nestjs/swagger';

const StatusResponse = (mainType: string): ApiResponseOptions => {
  return {
    status: 200,
    description: 'Returns country',
    schema: {
      type: mainType,
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    },
  };
};

export default StatusResponse;
