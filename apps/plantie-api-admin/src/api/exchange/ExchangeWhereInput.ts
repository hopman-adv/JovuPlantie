import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExchangeWhereInput = {
  fromUser?: StringNullableFilter;
  id?: StringFilter;
  plantOffered?: StringNullableFilter;
  plantRequested?: StringNullableFilter;
  status?: "Option1";
  toUser?: StringNullableFilter;
};
