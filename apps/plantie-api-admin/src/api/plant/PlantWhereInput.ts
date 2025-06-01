import { ChatMessageListRelationFilter } from "../chatMessage/ChatMessageListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlantWhereInput = {
  chatMessages?: ChatMessageListRelationFilter;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  name?: StringNullableFilter;
  photo?: JsonFilter;
  user?: UserWhereUniqueInput;
};
