import { Reservation } from "../reservation/Reservation";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  method: string | null;
  reservation?: Reservation | null;
  updatedAt: Date;
};
