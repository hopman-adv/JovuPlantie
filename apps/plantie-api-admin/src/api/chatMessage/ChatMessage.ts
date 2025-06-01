import { Plant } from "../plant/Plant";

export type ChatMessage = {
  content: string | null;
  createdAt: Date;
  id: string;
  plant?: Plant | null;
  receiver: string | null;
  sender: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
