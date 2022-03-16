import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskUpdateManyWithoutMilestonesInput } from "./TaskUpdateManyWithoutMilestonesInput";

export type MilestoneUpdateInput = {
  deadline?: Date | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutMilestonesInput;
};
