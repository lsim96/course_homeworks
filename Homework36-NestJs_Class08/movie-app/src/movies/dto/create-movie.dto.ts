import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Genre } from '../enum/movie.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Title of each movie',
    example: 'The Usual Suspects',
  })
  @IsString()
  @Length(5, 40)
  title: string;

  @ApiProperty({
    description: 'Describing the progress and outcome of the movie',
    example:
      'I Origins is a 2014 American science fiction romantic drama film written and directed by Mike Cahill.',
  })
  @IsString()
  @Length(10, 500)
  description: string;

  @ApiProperty({
    description: 'The year the movie was released in',
    example: [1995, 2004, 2025],
    minimum: 1950,
  })
  @IsNumber()
  @Min(1950)
  @Max(2025)
  releaseYear: number;

  @ApiProperty({
    enum: Genre,
    description: 'The genre of the movie ',
    example: 'Genre.ACTION',
  })
  @IsEnum(Genre, { each: true })
  genre: Genre[];

  @ApiProperty({
    description: 'The length of the movie in minutes',
    example: [99, 128, 196],
  })
  @IsNumber()
  @Min(40)
  @Max(240)
  duration: number;

  @ApiProperty({
    description: 'The rating of the movie',
    example: 8,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  rating: number;

  @IsString()
  @IsOptional()
  posterUrl: string;
}
