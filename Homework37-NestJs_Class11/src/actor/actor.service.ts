import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { Repository } from 'typeorm';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateActorDto } from './dtos/create-actor.dto';
import { UpdateActorDto } from './dtos/update-actor.dto';

@Injectable()
export class ActorService {
  constructor(@InjectRepository(Actor) private actorRepo: Repository<Actor>) {}

  async findAll() {
    return this.actorRepo.find();
  }

  async findById(id: string) {
    try {
      const foundActor = await this.actorRepo.findOneByOrFail({ id });

      return foundActor;
    } catch (error) {
      throw new NotFoundException('Actor was not found!');
    }
  }

  async findActorDetails(id: string) {
    const foundActor = await this.actorRepo.findOne({
      where: { id },
      relations: {
        movies: true,
      },
    });

    if (!foundActor) throw new NotFoundException('Actor was not found!');
  }

  async create(createActor: CreateActorDto) {
    return this.actorRepo.save(createActor);
  }

  async updateActor(id: string, updateData: UpdateActorDto) {
    try {
      const foundActor = await this.findById(id);

      Object.assign(foundActor, updateData);

      await this.actorRepo.save(foundActor);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteActor(id: string) {
    const foundActor = await this.findById(id);

    await this.actorRepo.remove(foundActor);
  }
}
