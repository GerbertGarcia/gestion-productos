import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  async create(productData: Partial<Product>): Promise<Product> {
  console.log(productData); 
  const existingProduct = await this.productRepository.findOne({ where: { nombre: productData.nombre } });
  if (existingProduct) {
    throw new Error('Un producto con este nombre ya existe.');
  }
  const product = this.productRepository.create(productData);
  return await this.productRepository.save(product);
}


  async update(id: string, productData: Partial<Product>): Promise<Product> {
    await this.findOne(id); 
    await this.productRepository.update(id, productData);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id); 
    await this.productRepository.remove(product);
  }
}
