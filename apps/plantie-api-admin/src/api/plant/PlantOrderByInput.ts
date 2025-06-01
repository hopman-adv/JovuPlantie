import { SortOrder } from "../../util/SortOrder";

export type PlantOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  photo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
