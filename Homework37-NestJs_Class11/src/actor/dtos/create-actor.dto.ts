import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateActorDto {
  @IsString()
  @Length(3, 30)
  fullName: string;

  @IsNumber()
  @Min(1945)
  @Max(2000)
  birthYear: number;
}
