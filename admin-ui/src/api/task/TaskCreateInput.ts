import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskCreateInput = {
  assignee?: UserWhereUniqueInput | null;
  description?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  title?: string | null;
};
