import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReservationWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  room?: RoomWhereUniqueInput;
  status?: StringNullableFilter;
};
