import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  method?: StringNullableFilter;
  reservation?: ReservationWhereUniqueInput;
};
