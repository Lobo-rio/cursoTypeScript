import { Request, Response } from "express";
import CreateProductsService from "../service/CreateProductsService";
import DeleteProductsService from "../service/DeleteProductsService";
import ListProductsService from "../service/ListProductsService";
import ShowProductsService from "../service/ShowProductsService";
import UpdateProductsService from "../service/UpdateProductsService";



export default class ProductsController {

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
      freight } = request.body;
    const productService = new CreateProductsService();

    const product = await productService.execute({
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
      freight,
    });

    return response.status(200).json(product);

  }

  public async list(request: Request, response: Response): Promise<Response>{
    const productService = new ListProductsService();

    const products = await productService.execute();

    return response.status(200).json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const productService = new ShowProductsService();

    const product = await productService.execute(id);

    return response.status(200).json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
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
      freight, } = request.body;

    const productService = new UpdateProductsService();

    const product = productService.execute(id, {
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
      freight,
    });

    return response.status(200).json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const productService = new DeleteProductsService();

    await productService.execute(id);

    return response.status(200).json({});
  }

}
