import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ExchangeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fromUser" source="fromUser" />
        <TextInput label="plantOffered" source="plantOffered" />
        <TextInput label="plantRequested" source="plantRequested" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="toUser" source="toUser" />
      </SimpleForm>
    </Create>
  );
};
