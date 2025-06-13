import { Injectable } from '@nestjs/common';
import { CreateActorAwardDto } from './dto/create-actor_award.dto';
import { UpdateActorAwardDto } from './dto/update-actor_award.dto';

@Injectable()
export class ActorAwardsService {
  create(createActorAwardDto: CreateActorAwardDto) {
    return 'This action adds a new actorAward';
  }

  findAll() {
    return `This action returns all actorAwards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actorAward`;
  }

  update(id: number, updateActorAwardDto: UpdateActorAwardDto) {
    return `This action updates a #${id} actorAward`;
  }

  remove(id: number) {
    return `This action removes a #${id} actorAward`;
  }
}
