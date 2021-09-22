import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../entity/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";


export default class ShowProductsService {

  public async execute(id: string): Promise<Product>{
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);
    if (!product) {
      throw new AppError("Product not found!");
    }

    return product;
  }

}
