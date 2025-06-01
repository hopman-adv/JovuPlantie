import { ChatMessageCreateNestedManyWithoutPlantsInput } from "./ChatMessageCreateNestedManyWithoutPlantsInput";
import { CommentCreateNestedManyWithoutPlantsInput } from "./CommentCreateNestedManyWithoutPlantsInput";
import { LikeCreateNestedManyWithoutPlantsInput } from "./LikeCreateNestedManyWithoutPlantsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlantCreateInput = {
  chatMessages?: ChatMessageCreateNestedManyWithoutPlantsInput;
  comments?: CommentCreateNestedManyWithoutPlantsInput;
  description?: string | null;
  likes?: LikeCreateNestedManyWithoutPlantsInput;
  name?: string | null;
  photo?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
