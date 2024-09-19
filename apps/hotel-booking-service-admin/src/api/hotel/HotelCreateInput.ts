import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  location?: string | null;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
