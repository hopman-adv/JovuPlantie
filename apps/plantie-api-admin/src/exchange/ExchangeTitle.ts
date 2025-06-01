import { Exchange as TExchange } from "../api/exchange/Exchange";

export const EXCHANGE_TITLE_FIELD = "fromUser";

export const ExchangeTitle = (record: TExchange): string => {
  return record.fromUser?.toString() || String(record.id);
};
