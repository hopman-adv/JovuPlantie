import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  plant?: PlantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
