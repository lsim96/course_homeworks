import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Length(5, 45)
  title: string;

  @IsString()
  @Length(3, 30)
  author: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(5)
  price: number;

  @IsNumber()
  @Min(10)
  pages: number;
}
