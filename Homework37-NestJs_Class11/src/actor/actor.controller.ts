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
import { ActorService } from './actor.service';
import { CreateActorDto } from './dtos/create-actor.dto';
import { UpdateActorDto } from './dtos/update-actor.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/roles/roles.guard';
import { RoleType } from 'src/roles/roles.model';
import { Roles } from 'src/roles/roles.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Controller('actors')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Roles([RoleType.USER, RoleType.ADMIN])
  @Get()
  findAll() {
    return this.actorService.findAll();
  }

  @Roles([RoleType.USER, RoleType.ADMIN])
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.actorService.findById(id);
  }

  @Roles([RoleType.ADMIN])
  @Get(':id/details')
  findDetails(@Param('id') id: string) {
    return this.actorService.findActorDetails(id);
  }

  @Roles([RoleType.ADMIN])
  @Post()
  create(@Body() createData: CreateActorDto) {
    return this.actorService.create(createData);
  }

  @Roles([RoleType.ADMIN])
  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateActorDto) {
    return this.actorService.updateActor(id, updateData);
  }

  @Roles([RoleType.ADMIN])
  @HttpCode(204)
  @Delete()
  delete(@Param('id') id: string) {
    return this.actorService.deleteActor(id);
  }
}
