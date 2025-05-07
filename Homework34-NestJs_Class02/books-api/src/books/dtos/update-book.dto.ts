import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @Length(5, 45)
  title: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  author: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock: number;

  @IsOptional()
  @IsNumber()
  @Min(5)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(10)
  pages: number;
}
