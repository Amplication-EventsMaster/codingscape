import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  method?: string | null;
  reservation?: ReservationWhereUniqueInput | null;
};
