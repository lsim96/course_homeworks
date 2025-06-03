import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DirectorsModule } from 'src/director/director.module';
import { ActorModule } from 'src/actor/actor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    forwardRef(() => DirectorsModule),
    forwardRef(() => ActorModule),
  ],
  //To build the table
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
