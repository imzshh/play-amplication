import { MilestoneCreateNestedManyWithoutProjectsInput } from "./MilestoneCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  deadline?: Date | null;
  mIlestones?: MilestoneCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
};
