import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneListRelationFilter } from "../milestone/MilestoneListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  deadline?: DateTimeNullableFilter;
  id?: StringFilter;
  mIlestones?: MilestoneListRelationFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
};
