import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type MilestoneWhereInput = {
  deadline?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  tasks?: TaskListRelationFilter;
};
