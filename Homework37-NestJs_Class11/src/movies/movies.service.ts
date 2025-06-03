import { DirectorService } from './../director/director.service';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieFilters } from './interfaces/movie.interface';
import { ActorService } from 'src/actor/actor.service';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private moviesRepo: Repository<Movie>,
    private directorService: DirectorService,
    private actorService: ActorService,
  ) {}

  async findAll(filters?: MovieFilters) {
    const query = this.moviesRepo
      .createQueryBuilder('movie')
      .select()
      .orderBy('movie.releaseYear', 'DESC');

    if (filters?.genre) {
      query.andWhere(':genre = ANY(movie.genre)', { genre: filters.genre });
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
    const foundMovie = await this.moviesRepo.findOne({
      where: { id: id },
      relations: {
        director: true,
        actors: true,
      },
    });

    if (!foundMovie) throw new NotFoundException('Movie was not found!');

    return foundMovie;
  }

  async create(createMovieDto: CreateMovieDto) {
    try {
      const { actors, director, ...movieData } = createMovieDto;

      const mappedActors = await Promise.all(
        actors.map(async (actorId) => {
          await this.actorService.findById(actorId);
          return { id: actorId };
        }),
      );

      const foundDirector = await this.directorService.findById(director);

      if (!foundDirector)
        throw new NotFoundException('Director was not found!');

      const newMovie = this.moviesRepo.create({
        ...movieData,
        director: { id: foundDirector.id },
        actors: mappedActors,
        createdBy: createMovieDto.createdBy,
      });

      await this.moviesRepo.save(newMovie);
      return newMovie;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
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
