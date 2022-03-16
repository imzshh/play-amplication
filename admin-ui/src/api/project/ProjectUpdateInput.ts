import { MilestoneUpdateManyWithoutProjectsInput } from "./MilestoneUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  deadline?: Date | null;
  mIlestones?: MilestoneUpdateManyWithoutProjectsInput;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
};
