import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';
import { CreateDirectorDto } from './dtos/create-directorsdto';
import { UpdateDirectorDto } from './dtos/update-director.dto';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director) private directorsRepo: Repository<Director>,
  ) {}

  findAll() {
    return this.directorsRepo.find();
  }

  async findById(id: string) {
    try {
      const foundDirector = await this.directorsRepo.findOneByOrFail({ id });

      if (!foundDirector) throw new NotFoundException('Director was not found');

      return foundDirector;
    } catch (error) {
      throw new NotFoundException('Director not found');
    }
  }

  async findDirectorDetails(id: string) {
    const foundDirector = await this.directorsRepo.findOne({
      where: { id },
      relations: {
        movies: true,
      },
    });

    if (!foundDirector) throw new NotFoundException('Director was not found!');

    return foundDirector;
  }

  async create(createDirector: CreateDirectorDto) {
    return this.directorsRepo.save(createDirector);
  }

  async updateDirector(id: string, updateDirector: UpdateDirectorDto) {
    const foundDirector = await this.findById(id);

    Object.assign(foundDirector, updateDirector);

    await this.directorsRepo.save(foundDirector);
  }

  async delete(id: string) {
    const foundDirector = await this.findById(id);

    await this.directorsRepo.remove(foundDirector);
  }
}
