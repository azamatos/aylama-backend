import { Module } from '@nestjs/common';

// project imports
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementResolver } from './advertisement.resolver';
import { AdvertisementService } from './advertisement.service';

@Module({
  providers: [AdvertisementResolver, AdvertisementService],
  controllers: [AdvertisementController],
})
export class AddAdvertisementModule {}
