import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "receiver";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.receiver?.toString() || String(record.id);
};
