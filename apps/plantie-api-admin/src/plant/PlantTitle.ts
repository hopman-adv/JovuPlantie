import { Plant as TPlant } from "../api/plant/Plant";

export const PLANT_TITLE_FIELD = "name";

export const PlantTitle = (record: TPlant): string => {
  return record.name?.toString() || String(record.id);
};
