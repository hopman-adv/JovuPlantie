import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ExchangeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fromUser" source="fromUser" />
        <TextField label="ID" source="id" />
        <TextField label="plantOffered" source="plantOffered" />
        <TextField label="plantRequested" source="plantRequested" />
        <TextField label="status" source="status" />
        <TextField label="toUser" source="toUser" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
