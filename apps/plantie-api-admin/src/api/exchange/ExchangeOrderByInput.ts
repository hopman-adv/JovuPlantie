import { SortOrder } from "../../util/SortOrder";

export type ExchangeOrderByInput = {
  createdAt?: SortOrder;
  fromUser?: SortOrder;
  id?: SortOrder;
  plantOffered?: SortOrder;
  plantRequested?: SortOrder;
  status?: SortOrder;
  toUser?: SortOrder;
  updatedAt?: SortOrder;
};
