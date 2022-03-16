import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assigneeId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  milestoneId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
