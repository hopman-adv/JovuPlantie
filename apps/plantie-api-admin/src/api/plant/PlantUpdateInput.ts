import { ChatMessageUpdateManyWithoutPlantsInput } from "./ChatMessageUpdateManyWithoutPlantsInput";
import { CommentUpdateManyWithoutPlantsInput } from "./CommentUpdateManyWithoutPlantsInput";
import { LikeUpdateManyWithoutPlantsInput } from "./LikeUpdateManyWithoutPlantsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlantUpdateInput = {
  chatMessages?: ChatMessageUpdateManyWithoutPlantsInput;
  comments?: CommentUpdateManyWithoutPlantsInput;
  description?: string | null;
  likes?: LikeUpdateManyWithoutPlantsInput;
  name?: string | null;
  photo?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
