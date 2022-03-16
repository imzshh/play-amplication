import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MilestoneServiceBase } from "./base/milestone.service.base";

@Injectable()
export class MilestoneService extends MilestoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
