import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatMessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  plant?: PlantWhereUniqueInput;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
