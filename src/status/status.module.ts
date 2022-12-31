import { Module } from '@nestjs/common';

// project imports
import { StatusController } from './status.controller';
import { StatusResolver } from './status.resolver';
import { StatusService } from './status.service';

@Module({
  providers: [StatusResolver, StatusService],
  controllers: [StatusController],
})
export class StatusModule {}
