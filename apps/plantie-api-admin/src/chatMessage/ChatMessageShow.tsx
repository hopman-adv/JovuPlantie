import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PLANT_TITLE_FIELD } from "../plant/PlantTitle";

export const ChatMessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="plant" source="plant.id" reference="Plant">
          <TextField source={PLANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="receiver" source="receiver" />
        <TextField label="sender" source="sender" />
        <TextField label="sentAt" source="sentAt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
