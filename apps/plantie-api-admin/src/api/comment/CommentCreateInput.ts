import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  plant?: PlantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
