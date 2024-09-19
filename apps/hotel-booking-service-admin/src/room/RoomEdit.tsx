import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { HotelTitle } from "../hotel/HotelTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="hotel.id" reference="Hotel" label="Hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="reservations" reference="Reservation">
          <SelectArrayInput
            optionText={ReservationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="roomNumber" source="roomNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
