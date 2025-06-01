import { Plant } from "../plant/Plant";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  plant?: Plant | null;
  updatedAt: Date;
  user?: User | null;
};
