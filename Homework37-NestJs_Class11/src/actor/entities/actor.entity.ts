import { Movie } from 'src/movies/entities/movie.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Actor {
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

  @ManyToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
