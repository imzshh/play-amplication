import { Milestone as TMilestone } from "../api/milestone/Milestone";

export const MILESTONE_TITLE_FIELD = "name";

export const MilestoneTitle = (record: TMilestone): string => {
  return record.name || record.id;
};
