import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  plant?: PlantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
