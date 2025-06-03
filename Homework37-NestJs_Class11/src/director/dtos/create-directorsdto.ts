import { IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateDirectorDto {
  @IsString()
  @Length(3, 30)
  fullName: string;

  @IsNumber()
  @Min(1945)
  @Max(2000)
  birthYear: number;
}