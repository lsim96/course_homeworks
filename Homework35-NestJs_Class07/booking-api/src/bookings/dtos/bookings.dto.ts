import { ApiProperty } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class BookingDto extends CreateBookingDto {
  @ApiProperty({
    description: 'the id of the booking',
  })
  id: string;
}
