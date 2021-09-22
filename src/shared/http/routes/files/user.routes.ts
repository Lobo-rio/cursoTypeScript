import express from 'express';

import CreateUserController from '@modules/users/controller/UserController';

const routerUsers = express.Router();

const userController = new CreateUserController();

routerUsers.get('/users', userController.index);
routerUsers.get('/users/:id', userController.getByEmail);
routerUsers.post('/users', userController.create);
routerUsers.put('/users/:id', userController.update);
routerUsers.delete('/users/:id', userController.delete);


export default routerUsers
