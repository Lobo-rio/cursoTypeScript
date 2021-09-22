import { getCustomRepository } from "typeorm";
import Product from "../entity/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";


export default class ListProductsService {

  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const products: Product[] = await productRepository.find();

    return products;
  }

}
