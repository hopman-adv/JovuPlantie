import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  plantId?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
