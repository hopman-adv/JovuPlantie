import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Plant } from "../plant/Plant";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  plants?: Array<Plant>;
  profilePhoto: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
