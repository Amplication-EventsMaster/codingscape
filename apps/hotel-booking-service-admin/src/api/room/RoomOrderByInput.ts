import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  roomNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
