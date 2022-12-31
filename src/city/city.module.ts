import { Module } from '@nestjs/common';

// project imports
import { CityController } from './city.controller';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';

@Module({
  providers: [CityResolver, CityService],
  controllers: [CityController],
})
export class CityModule {}
