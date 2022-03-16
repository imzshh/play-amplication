import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskWhereInput = {
  assignee?: UserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  milestone?: MilestoneWhereUniqueInput;
  title?: StringNullableFilter;
};
