import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  plant?: PlantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
