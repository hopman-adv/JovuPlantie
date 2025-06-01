import { ChatMessage } from "../chatMessage/ChatMessage";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Plant = {
  chatMessages?: Array<ChatMessage>;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  likes?: Array<Like>;
  name: string | null;
  photo: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
