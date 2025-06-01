import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type ChatMessageUpdateInput = {
  content?: string | null;
  plant?: PlantWhereUniqueInput | null;
  receiver?: string | null;
  sender?: string | null;
  sentAt?: Date | null;
};
