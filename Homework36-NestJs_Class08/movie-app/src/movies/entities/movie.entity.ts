import { timestamp } from 'rxjs';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../enum/movie.enum';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'description',
  })
  description: string;

  @Column({
    name: 'release_year',
  })
  releaseYear: number;

  @Column({
    name: 'genre',
    type: 'enum',
    enum: Genre,
    array: true,
  })
  genre: Genre[];

  @Column({
    name: 'duration',
  })
  duration: number;

  @Column({
    name: 'rating',
  })
  rating: number;

  @Column({
    nullable: true,
    name: 'poster_url',
  })
  posterUrl: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
