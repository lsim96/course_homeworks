import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Book, BookFilters } from './interfaces/book.interface';
import { v4 as uuid } from 'uuid';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BooksService {
  private BOOKS_PATH = join(
    process.cwd(),
    'src',
    'books',
    'data',
    'books.json',
  );

  async getAllBooks(filters?: BookFilters) {
    const booksJson = await readFile(this.BOOKS_PATH, 'utf-8');

    let books = JSON.parse(booksJson) as Book[];

    if (filters?.author) {
      books = books.filter((book) =>
        book.author
          .toLowerCase()
          .includes(filters.author?.toLowerCase() as string),
      );
    }

    if (filters?.minPrice) {
      books = books.filter(
        (book) => book.price >= (filters.minPrice as number),
      );
    }

    return books;
  }

  async saveBooks(books: Book[]) {
    await writeFile(this.BOOKS_PATH, JSON.stringify(books, null, 2), 'utf-8');
  }

  async getBooksById(id: string) {
    const books = await this.getAllBooks();

    const foundBook = books.find((book) => book.id === id);

    if (!foundBook) throw new NotFoundException('Book was not found!');

    return foundBook;
  }

  async createBook(bookData: CreateBookDto) {
    const books = await this.getAllBooks();

    const newBook: Book = {
      ...bookData,
      id: uuid(),
    };

    books.push(newBook);

    await this.saveBooks(books);

    return newBook;
  }

  async updateBook(bookId: string, updateData: UpdateBookDto) {
    const books = await this.getAllBooks();

    const foundBook = books.find((book) => book.id === bookId);

    if (!foundBook) throw new NotFoundException('Book was not found!');

    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, ...updateData } : book,
    );

    await this.saveBooks(updatedBooks);
  }

  async deleteBook(id: string) {
    const books = await this.getAllBooks();

    const updatedBooks = books.filter((book) => book.id === id);

    if (books.length === updatedBooks.length)
      throw new NotFoundException('Book was not found!');

    await this.saveBooks(updatedBooks);
  }
}
