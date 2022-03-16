import { MilestoneWhereInput } from "./MilestoneWhereInput";
import { MilestoneOrderByInput } from "./MilestoneOrderByInput";

export type MilestoneFindManyArgs = {
  where?: MilestoneWhereInput;
  orderBy?: Array<MilestoneOrderByInput>;
  skip?: number;
  take?: number;
};
