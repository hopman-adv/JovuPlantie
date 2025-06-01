import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PlantTitle } from "../plant/PlantTitle";

export const ChatMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="plant.id" reference="Plant" label="plant">
          <SelectInput optionText={PlantTitle} />
        </ReferenceInput>
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};
