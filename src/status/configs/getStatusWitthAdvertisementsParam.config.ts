import { ApiParamOptions } from '@nestjs/swagger';

export const StatusWithAdvertisementsParam: ApiParamOptions = {
  name: 'id',
  required: true,
  description: 'status identificator',
  schema: { type: 'number' },
};
