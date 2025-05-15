import { CreateBookingDto } from './dtos/create-booking.dto';
import { UpdateBookingDto } from './dtos/update-booking.dto';
import { BookingsService } from './bookings.service';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookingDto } from './dtos/bookings.dto';
import { BookingFilters } from './interfaces/booking.interface';
import { RoomType } from './enums/room-type.enum';

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  //Getting all bookings

  @Get()
  @ApiQuery({
    name: 'roomNumber',
    required: false,
  })
  @ApiQuery({
    name: 'type',
    required: false,
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
  })
  @ApiQuery({
    name: 'isAvailable',
    required: false,
  })
  @ApiOperation({ summary: 'endpoint that fetches all the bookings' })
  @ApiOkResponse({
    type: BookingDto,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: "The server couldn't fetch the bookings",
  })
  getAllBookings(
    @Query('roomNumber') roomNumber: string,
    @Query('type') type: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
    @Query('isAvailable') isAvailable: string,
  ) {
    const bookingFilter: BookingFilters = {
      roomNumber: !Number.isNaN(Number(roomNumber)) ? Number(roomNumber) : null,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(maxPrice)) ? Number(maxPrice) : null,
      isAvailable: !!isAvailable,
      type: Object.values(RoomType).includes(type as RoomType)
        ? (type as RoomType)
        : null,
    };

    return this.bookingsService.getAllBookings(bookingFilter);
  }

  //Get booking by id

  @Get(':id')
  @ApiOperation({ summary: 'endpoint that fetches a booking by id' })
  @ApiOkResponse({
    type: BookingDto,
  })
  getBookingById(@Param('id') bookingId: string) {
    return this.bookingsService.getBookingById(bookingId);
  }

  //Create a booking
  @Post()
  @ApiOperation({ summary: 'endpoint that creates a booking' })
  @ApiOkResponse({
    type: BookingDto,
  })
  createProduct(@Body() createData: CreateBookingDto) {
    return this.bookingsService.createBooking(createData);
  }

  //Update booking

  @HttpCode(204)
  @Patch(':id')
  @ApiOperation({ summary: 'endpoint that updates a booking' })
  updateBooking(@Param('id') id: string, @Body() updateData: UpdateBookingDto) {
    return this.bookingsService.updateBooking(id, updateData);
  }

  //Delete booking

  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({ summary: 'endpoint that deletes a booking' })
  deleteBooking(@Param('id') id: string) {
    return this.bookingsService.deleteBooking(id);
  }
}
