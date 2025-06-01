import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExchangeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Exchanges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fromUser" source="fromUser" />
        <TextField label="ID" source="id" />
        <TextField label="plantOffered" source="plantOffered" />
        <TextField label="plantRequested" source="plantRequested" />
        <TextField label="status" source="status" />
        <TextField label="toUser" source="toUser" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
