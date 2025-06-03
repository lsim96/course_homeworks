import { Genre } from '../enum/movie.enum';

export interface MovieFilters {
  genre?: Genre | null;
  minRating?: number | null;
  maxDuration?: number | null;
  title?: string;
  sortByRating?: 'ASC' | 'DESC';
  sortByDuration?: 'ASC' | 'DESC';
}
