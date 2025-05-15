import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { RoomType } from '../enums/room-type.enum';
import { Type } from 'class-transformer';

export class CreateBookingDto {
  @ApiProperty({
    description: 'Number of each room',
    example: [1, 2, 3, 88],
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  @Max(999)
  roomNumber: number;

  @ApiProperty({
    enum: RoomType,
    description: 'Type of room',
    example: 'RoomType.DOUBLE',
  })
  @IsEnum(RoomType)
  type: RoomType;

  @ApiProperty({
    description: 'Price of the rooms',
    example: [123.33, 68.19, 219.9],
    minimum: 1,
  })
  @IsNumber()
  @Min(50)
  @Max(100)
  price: number;

  @ApiProperty({
    description: 'Are any rooms available',
    example: [1, 10, 20],
    minimum: 0,
  })
  @IsBoolean()
  isAvailable: boolean;

  @ApiProperty({
    description: 'A desirable or useful feature of the facility',
    example: ['coffee maker, microwave, pool, sauna'],
  })
  @IsArray()
  @IsString({ each: true })
  ameneties: string[];

  @ApiProperty({
    description: 'How many rooms does the facility posses',
    example: [15, 100, 224],
    minimum: 1,
  })
  @IsNumber()
  maxOccupancy: number;

  // @IsOptional()
  //Having issues with passing the date format in postman

  @ApiProperty({
    description: 'The last date the room was cleaned',
    example: '2025-05-08',
  })
  @IsDateString()
  lastCleaned: Date;

  @ApiProperty({
    description: 'Notes left from the previous maintenance visits',
    example: 'Fixed the leaking shower',
  })
  @IsOptional()
  @IsString()
  maintenanceNotes?: string;
}
