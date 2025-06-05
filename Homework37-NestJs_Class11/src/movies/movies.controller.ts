import { User } from './../users/entities/user.entity';
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
  Req,
  UseGuards,
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
import { RoleGuard } from 'src/roles/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { RoleType } from 'src/roles/roles.model';

@UseGuards(AuthGuard, RoleGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  //Get all movies

  @HttpCode(200)
  @Get()
  @ApiQuery({
    name: 'filters',
    required: false,
  })
  @ApiOperation({ summary: 'Endpoint that fetches all the movies' })
  @ApiInternalServerErrorResponse({
    description: "The server couldn't fetch the movies",
  })
  @Roles([RoleType.USER, RoleType.ADMIN])
  findAll(@Query() filters: MovieFilters) {
    return this.moviesService.findAll(filters);
  }

  //Get movie by id

  @Roles([RoleType.USER, RoleType.ADMIN])
  @HttpCode(200)
  @Get(':id')
  @ApiOperation({ summary: 'Endpoint that fetches a movie by id' })
  findById(@Param('id') id: string) {
    return this.moviesService.findById(id);
  }

  //Create a booking

  @Roles([RoleType.ADMIN])
  @HttpCode(201)
  @Post()
  @ApiOperation({ summary: 'Endpoint that creates a movie' })
  create(@Body() createData: CreateMovieDto, @Req() req: Request) {
    const userEmail = (req as any).user.email;

    return this.moviesService.create({ ...createData, createdBy: userEmail });
  }

  //Update movie

  @Roles([RoleType.ADMIN])
  @HttpCode(204)
  @Patch(':id')
  @ApiOperation({ summary: 'Endpoint that updates a movie' })
  update(@Param('id') id: string, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.updateMovie(id, updateData);
  }

  //Delete movie

  @Roles([RoleType.ADMIN])
  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({ summary: 'Endpoint that deletes a movie' })
  delete(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }
}
