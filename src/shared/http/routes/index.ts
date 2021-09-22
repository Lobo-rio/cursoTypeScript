import express from 'express';

import userRouter from './files/user.routes';
import productRouter from './files/products.routes';

const routes = express.Router();

const link = '/appKichort';

routes.use(link, userRouter);
routes.use(link, productRouter);

export default routes;
