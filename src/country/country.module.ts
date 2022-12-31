import { Module } from '@nestjs/common';

// project imports
import { CountryController } from './country.controller';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  providers: [CountryResolver, CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
