import { Module } from "@nestjs/common";
import { MilestoneModuleBase } from "./base/milestone.module.base";
import { MilestoneService } from "./milestone.service";
import { MilestoneController } from "./milestone.controller";
import { MilestoneResolver } from "./milestone.resolver";

@Module({
  imports: [MilestoneModuleBase],
  controllers: [MilestoneController],
  providers: [MilestoneService, MilestoneResolver],
  exports: [MilestoneService],
})
export class MilestoneModule {}
