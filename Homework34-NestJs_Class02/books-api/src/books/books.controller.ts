import { UpdateBookDto } from './dtos/update-book.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookFilters } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @HttpCode(202)
  @Get()
  getAllBooks(
    @Query('author') author: string,
    @Query('minPrice') minPrice: string,
  ) {
    const booksFilter: BookFilters = {
      author,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
    };

    return this.booksService.getAllBooks(booksFilter);
  }

  @HttpCode(202)
  @Get(':id')
  getBookById(@Param('id') bookId: string) {
    return this.booksService.getBooksById(bookId);
  }

  @Post()
  createBook(@Body() createData: CreateBookDto) {
    return this.booksService.createBook(createData);
  }

  @HttpCode(204)
  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateData: UpdateBookDto) {
    return this.booksService.updateBook(id, updateData);
  }

  @HttpCode(202)
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
