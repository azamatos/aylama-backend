import { ApiParamOptions } from '@nestjs/swagger';

export const AdvertisementParam: ApiParamOptions = {
  name: 'id',
  required: true,
  description: 'advertisement identificator',
  schema: { type: 'number' },
};
