import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const ExchangeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
