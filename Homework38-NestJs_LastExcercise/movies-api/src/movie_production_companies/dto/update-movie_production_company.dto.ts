import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieProductionCompanyDto } from './create-movie_production_company.dto';

export class UpdateMovieProductionCompanyDto extends PartialType(CreateMovieProductionCompanyDto) {}
