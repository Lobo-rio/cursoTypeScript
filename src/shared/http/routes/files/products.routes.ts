import express from 'express';

import ProductController from '@modules/products/controller/ProductsController';

const routerProducts = express.Router();

const productController = new ProductController();

routerProducts.get('/products', productController.list);
routerProducts.get('/products/:id', productController.show);
routerProducts.post('/products', productController.create);
routerProducts.put('/products/:id', productController.update);
routerProducts.delete('/products/:id', productController.delete);


export default routerProducts
