import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MilestoneResolverBase } from "./base/milestone.resolver.base";
import { Milestone } from "./base/Milestone";
import { MilestoneService } from "./milestone.service";

@graphql.Resolver(() => Milestone)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MilestoneResolver extends MilestoneResolverBase {
  constructor(
    protected readonly service: MilestoneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
