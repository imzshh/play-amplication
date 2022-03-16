import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskUpdateInput = {
  assignee?: UserWhereUniqueInput | null;
  description?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  title?: string | null;
};
