import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskCreateNestedManyWithoutMilestonesInput } from "./TaskCreateNestedManyWithoutMilestonesInput";

export type MilestoneCreateInput = {
  deadline?: Date | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutMilestonesInput;
};
