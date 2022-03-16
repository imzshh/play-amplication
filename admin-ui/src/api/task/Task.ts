import { User } from "../user/User";
import { Milestone } from "../milestone/Milestone";

export type Task = {
  assignee?: User | null;
  createdAt: Date;
  description: string | null;
  id: string;
  milestone?: Milestone | null;
  title: string | null;
  updatedAt: Date;
};
