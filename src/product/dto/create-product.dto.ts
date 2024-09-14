import { IsString, IsNumber, MinLength, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Min(0.01)
  precio: number;

  @IsNumber()
  @Min(0)
  stock: number;
}