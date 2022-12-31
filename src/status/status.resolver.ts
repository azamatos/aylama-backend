import { Resolver, Mutation, Query, Args, Context } from '@nestjs/graphql';
import { Request } from 'express';

// project imports
import { StatusService } from './status.service';

// types
import { AddStatusInput } from 'src/types/graphql';

@Resolver('Status')
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Mutation('addStatus')
  addStatus(@Args('StatusInput') statusInput: AddStatusInput, @Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.statusService.addStatus(authorization, statusInput);
  }

  @Query('getStatuses')
  getStatuses(@Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.statusService.getStatuses(authorization);
  }

  @Query('getStatusWithAdvertisements')
  getStatusWithAdvertisements(@Args('id') id: string, @Context('req') req: Request) {
    const { authorization } = req.headers;
    return this.statusService.getStatus(authorization, id);
  }
}
