import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movies.entity';
import { UpdateMovieDto } from './entities/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `This will search movies made after: ${searchingYear}`;
  // }

  @Get(':id')
  getById(@Param('id') movieId: number): Movie {
    return this.moviesService.getById(movieId);
  }

  @Post()
  create(@Body() movieInfo: CreateMovieDto) {
    return this.moviesService.create(movieInfo);
  }

  @Delete(':id')
  deleteById(@Param('id') movieId: number) {
    return this.moviesService.deleteById(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: number, @Body() updatedData: UpdateMovieDto) {
    this.getById(movieId);
    return this.moviesService.update(movieId, updatedData);
  }
}
