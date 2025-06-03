import { RoomType } from '../enums/room-type.enum';

export interface BookingFilters {
  roomNumber?: number | null;
  type?: RoomType | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  isAvailable?: boolean | null;
}
