import { StringFilter } from "../../util/StringFilter";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  plant?: PlantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
