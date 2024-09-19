import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="method" source="method" />
        <ReferenceInput
          source="reservation.id"
          reference="Reservation"
          label="Reservation"
        >
          <SelectInput optionText={ReservationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
