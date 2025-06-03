import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dtos/create-directorsdto';
import { UpdateDirectorDto } from './dtos/update-director.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/roles/roles.guard';
import { RoleType } from 'src/roles/roles.model';
import { Roles } from 'src/roles/roles.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Controller('directors')
export class DirectorController {
  constructor(private directorsService: DirectorService) {}

  @Roles(RoleType.USER)
  @Get()
  findAll() {
    return this.directorsService.findAll();
  }

  @Roles(RoleType.USER)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.directorsService.findById(id);
  }

  @Roles(RoleType.ADMIN)
  @Post()
  create(@Body() createDirector: CreateDirectorDto) {
    return this.directorsService.create(createDirector);
  }

  @Roles(RoleType.ADMIN)
  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirector: UpdateDirectorDto) {
    return this.directorsService.updateDirector(id, updateDirector);
  }

  @Roles(RoleType.ADMIN)
  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.directorsService.delete(id);
  }
}
