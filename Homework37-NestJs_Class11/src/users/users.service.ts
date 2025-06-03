import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

const DUPLICATE_PG_CODE = '23505';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll() {
    return this.usersRepo.find();
  }

  async findById(id: string) {
    try {
      const foundUser = await this.usersRepo.findOneByOrFail({ id });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async findByEmail(email: string) {
    return this.usersRepo.findOneBy({ email });
  }

  async create(createData: CreateUserDto) {
    return this.usersRepo.save(createData);
  }

  async updateUser(id: string, updateData: UpdateUserDto) {
    try {
      const foundUser = await this.findById(id);

      Object.assign(foundUser, updateData);

      await this.usersRepo.save(foundUser);
    } catch (error) {
      if (error.code === DUPLICATE_PG_CODE) {
        throw new BadRequestException('Email is taken');
      }

      throw new InternalServerErrorException(error.message);
    }
  }

  async saveRefreshToken(id: string, refreshToken: string) {
    const foundUser = await this.findById(id);

    foundUser.refreshTokens.push(refreshToken);

    await this.usersRepo.save(foundUser);
  }

  async deleteRefreshToken(id: string, refreshToken: string) {
    const foundUser = await this.findById(id);

    foundUser.refreshTokens = foundUser.refreshTokens.filter(
      (token) => token !== refreshToken,
    );

    await this.usersRepo.save(foundUser);
  }

  async deleteUser(id: string) {
    const foundUser = await this.findById(id);

    await this.usersRepo.remove(foundUser);
  }
}
