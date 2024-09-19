import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOTEL_TITLE_FIELD } from "../hotel/HotelTitle";

export const RoomList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Rooms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Hotel" source="hotel.id" reference="Hotel">
          <TextField source={HOTEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="roomNumber" source="roomNumber" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
