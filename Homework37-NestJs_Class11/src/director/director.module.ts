import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectorController],
  providers: [DirectorService],
  exports: [DirectorService],
})
export class DirectorsModule {}
