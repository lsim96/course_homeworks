import { Actor } from 'src/actor/entities/actor.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'full_name',
  })
  fullName: string;

  @Column({
    name: 'birth_year',
  })
  birthYear: number;

  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];
}
