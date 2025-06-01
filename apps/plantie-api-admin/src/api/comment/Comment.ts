import { Plant } from "../plant/Plant";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  plant?: Plant | null;
  updatedAt: Date;
  user?: User | null;
};
