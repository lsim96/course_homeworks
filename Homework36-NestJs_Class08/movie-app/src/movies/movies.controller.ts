import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieFilters } from './interfaces/movie.interface';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  //Get all movies

  @Get()
  @ApiQuery({
    name: 'filters',
    required: false,
  })
  @ApiOperation({ summary: 'Endpoint that fetches all the movies' })
  @ApiInternalServerErrorResponse({
    description: "The server couldn't fetch the movies",
  })
  findAll(@Query() filters: MovieFilters) {
    return this.moviesService.findAll(filters);
  }

  //Get movie by id

  @Get(':id')
  @ApiOperation({ summary: 'Endpoint that fetches a movie by id' })
  findById(@Param('id') id: string) {
    return this.moviesService.findById(id);
  }

  //Create a booking

  @Post()
  @ApiOperation({ summary: 'Endpoint that creates a movie' })
  create(@Body() createData: CreateMovieDto) {
    return this.moviesService.create(createData);
  }

  //Update movie

  @HttpCode(204)
  @Patch(':id')
  @ApiOperation({ summary: 'Endpoint that updates a movie' })
  update(@Param('id') id: string, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, updateData);
  }

  //Delete movie

  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({ summary: 'Endpoint that deletes a movie' })
  delete(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }
}
