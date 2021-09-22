import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

import Product from "../entity/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";


interface IRequest {

  prod_name: string;
  factory_id: number;
  model_furniture_id: number;
  description: string;
  color: string;
  height: number;
  width: number;
  depth: number;
  min_stock: number;
  stock: number;
  ipi: number;
  price_coast: number;
  price: number;
  price_old: number;
  price_financed: number;
  qrcode: string;
  percentage_price: number;
  percentage_price_financed: number;
  price_ipi: number;
  freight: number;

}

export default class CreateProductsService{

   public async execute({
      prod_name,
      factory_id,
      model_furniture_id,
      description,
      color,
      height,
      width,
      depth,
      min_stock,
      stock,
      ipi,
      price_coast,
      price,
      price_old,
      price_financed,
      qrcode,
      percentage_price,
      percentage_price_financed,
      price_ipi,
      freight
    }: IRequest): Promise<Product> {
      const productRepository = getCustomRepository(ProductRepository);

     const productExists = await productRepository.findByName(prod_name);
     if (productExists) {
       throw new AppError("There is already one user with this product!")
     }

     const product = productRepository.create({
       prod_name,
       factory_id,
       model_furniture_id,
       description,
       color,
       height,
       width,
       depth,
       min_stock,
       stock,
       ipi,
       price_coast,
       price,
       price_old,
       price_financed,
       qrcode,
       percentage_price,
       percentage_price_financed,
       price_ipi,
       freight
     });

     await productRepository.save(product);

     return product;

    }
}



