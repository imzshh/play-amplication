import { Project } from "../project/Project";
import { Task } from "../task/Task";

export type Milestone = {
  createdAt: Date;
  deadline: Date | null;
  id: string;
  name: string | null;
  project?: Project | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
