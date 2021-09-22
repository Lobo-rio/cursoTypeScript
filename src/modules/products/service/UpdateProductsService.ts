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

export default class UpdateProductsService {

  public async execute(id: string,{
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

    const product = await productRepository.findOne(id);
    if (!product) {
      throw new AppError("Product not found!")
    }

    product.prod_name = prod_name;
    product.factory_id = factory_id;
    product.model_furniture_id = model_furniture_id;
    product.description = description;
    product.color = color;
    product.height = height;
    product.width = width;
    product.depth = depth;
    product.min_stock = min_stock;
    product.stock = stock;
    product.ipi = ipi;
    product.price_coast = price_coast;
    product.price = price;
    product.price_old = price_old;
    product.price_financed = price_financed;
    product.qrcode = qrcode;
    product.percentage_price = percentage_price;
    product.percentage_price_financed = percentage_price_financed;
    product.price_ipi = ipi;
    product.freight = freight;

    await productRepository.save(product);

    return product;
  }

}
