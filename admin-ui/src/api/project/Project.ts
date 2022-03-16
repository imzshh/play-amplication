import { Milestone } from "../milestone/Milestone";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  deadline: Date | null;
  id: string;
  mIlestones?: Array<Milestone>;
  name: string | null;
  owner?: User | null;
  updatedAt: Date;
};
