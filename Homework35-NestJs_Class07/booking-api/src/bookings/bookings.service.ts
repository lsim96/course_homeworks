import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { BookingDto } from './dtos/bookings.dto';
import { CreateBookingDto } from './dtos/create-booking.dto';

import { v4 as uuid } from 'uuid';
import { UpdateBookingDto } from './dtos/update-booking.dto';
import { BookingFilters } from './interfaces/booking.interface';

@Injectable()
export class BookingsService {
  private BOOKINGS_PATH = join(process.cwd(), 'src', 'data', 'bookings.json');

  async getAllBookings(filters?: BookingFilters) {
    const bookingsJson = await readFile(this.BOOKINGS_PATH, 'utf-8');

    let bookings = JSON.parse(bookingsJson) as BookingDto[];

    if (filters?.roomNumber) {
      bookings = bookings.filter(
        (booking) => booking.roomNumber === filters.roomNumber,
      );
    }

    //Not sure if this is done this way with a enum in play
    if (filters?.type) {
      bookings = bookings.filter((booking) => booking.type === filters.type);
    }

    if (filters?.minPrice) {
      bookings = bookings.filter(
        (booking) => booking.price >= (filters.minPrice as number),
      );
    }

    if (filters?.maxPrice) {
      bookings = bookings.filter(
        (booking) => booking.price <= (filters.maxPrice as number),
      );
    }

    if (filters?.isAvailable) {
      bookings = bookings.filter((booking) => booking.isAvailable);
    }

    return bookings;
  }

  async saveBookings(bookings: BookingDto[]) {
    await writeFile(
      this.BOOKINGS_PATH,
      JSON.stringify(bookings, null, 2),
      'utf-8',
    );
  }

  async getBookingById(id: string) {
    const bookings = await this.getAllBookings();

    const foundBooking = bookings.find((booking) => booking.id === id);

    if (!foundBooking) throw new NotFoundException('Booking was not found!');

    return foundBooking;
  }

  async createBooking(bookingData: CreateBookingDto) {
    const bookings = await this.getAllBookings();

    const newBooking: BookingDto = {
      ...bookingData,
      id: uuid(),
    };

    bookings.push(newBooking);

    await this.saveBookings(bookings);

    return newBooking;
  }

  async updateBooking(bookingId: string, updateData: UpdateBookingDto) {
    const bookings = await this.getAllBookings();

    const bookingExists = bookings.some((booking) => booking.id === bookingId);

    if (!bookingExists) throw new NotFoundException('Booking was not found!');

    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, ...updateData } : booking,
    );

    await this.saveBookings(updatedBookings);
  }

  async deleteBooking(id: string) {
    const bookings = await this.getAllBookings();

    const updatedBookings = bookings.filter((booking) => booking.id !== id);

    if (bookings.length === updatedBookings.length)
      throw new NotFoundException('Booking not found!');

    await this.saveBookings(updatedBookings);
  }
}
