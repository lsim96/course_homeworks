import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieFilters } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private moviesRepo: Repository<Movie>) {}

  async findAll(filters?: MovieFilters) {
    const query = this.moviesRepo
      .createQueryBuilder('movie')
      .select()
      .orderBy('movie.releaseYear', 'DESC');

    if (filters?.genre) {
      query.andWhere('movie.genre = :genre', { genre: filters.genre });
    }

    if (filters?.minRating) {
      query.andWhere('movie.rating >= :minRating', {
        minRating: filters.minRating,
      });
    }

    if (filters?.maxDuration) {
      query.andWhere('movie.duration <= :maxDuration', {
        maxDuration: filters.maxDuration,
      });
    }

    if (filters?.title) {
      query.andWhere('movie.title = :title', { title: filters.title });
    }

    if (filters?.sortByRating) {
      query.orderBy('movie.rating', filters.sortByRating);
    }
    //  else {
    //   query.orderBy('movie.rating', 'ASC');
    // }

    if (filters?.sortByDuration) {
      query.orderBy('movie.duration', filters.sortByDuration);
    }
    //  else {
    //   query.orderBy('movie.duration', 'ASC');
    // }

    return await query.getMany();
  }

  async findById(id: string) {
    const foundMovie = await this.moviesRepo.findOneBy({ id });

    if (!foundMovie) throw new NotFoundException('Movie was not found!');

    return foundMovie;
  }

  async create(createData: CreateMovieDto) {
    return this.moviesRepo.save(createData);
  }

  async updateMovie(id: string, updateData: UpdateMovieDto) {
    const foundMovie = await this.findById(id);

    Object.assign(foundMovie, updateData);

    await this.moviesRepo.save(foundMovie);
  }

  async delete(id: string) {
    const foundMovie = await this.findById(id);

    await this.moviesRepo.remove(foundMovie);
  }
}
