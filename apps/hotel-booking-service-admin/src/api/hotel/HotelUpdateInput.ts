import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  location?: string | null;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
