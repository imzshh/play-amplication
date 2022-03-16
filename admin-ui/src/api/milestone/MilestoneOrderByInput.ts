import { SortOrder } from "../../util/SortOrder";

export type MilestoneOrderByInput = {
  createdAt?: SortOrder;
  deadline?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
