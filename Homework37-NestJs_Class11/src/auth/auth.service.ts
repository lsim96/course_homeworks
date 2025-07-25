import { User } from './../users/entities/user.entity';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { CredentialsDto } from './dtos/credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async registerUser(userData: CreateUserDto) {
    const userExists = await this.usersService.findByEmail(userData.email);

    if (userExists) throw new BadRequestException('User already exists');

    const hashedPass = await hash(userData.password, 8);

    userData.password = hashedPass;

    await this.usersService.create(userData);
  }

  async loginUser(credentials: CredentialsDto) {
    const foundUser = await this.usersService.findByEmail(credentials.email);

    if (!foundUser) throw new UnauthorizedException('Invalid credentials');

    const isPassValid = await compare(credentials.password, foundUser.password);

    if (!isPassValid) throw new UnauthorizedException('Invalid credentials');

    const token = await this.jwtService.signAsync({
      userId: foundUser.id,
    });

    const refreshToken = await this.jwtService.signAsync(
      {
        userId: foundUser.id,
      },
      {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );

    await this.usersService.saveRefreshToken(foundUser.id, refreshToken);

    const { password, refreshTokens, ...userWithoutPass } = foundUser;

    return {
      user: userWithoutPass,
      token,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      //1. Verify ref token
      const { userId } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });

      //2.Find user in db
      const foundUser = await this.usersService.findById(userId);

      //3. Check if token exists in ref tokens
      const tokenExists = foundUser.refreshTokens.some(
        (token) => token === refreshToken,
      );

      if (!tokenExists) throw new Error();

      const token = await this.jwtService.signAsync({ userId: foundUser.id });

      return { token };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException();
    }
  }

  async logoutUser(refreshToken: string) {
    try {
      const { userId } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });

      await this.usersService.deleteRefreshToken(userId, refreshToken);
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Couldn't logout user!");
    }
  }
}
