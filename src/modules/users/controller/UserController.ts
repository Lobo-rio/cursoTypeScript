import { Request, Response } from "express";
import { CreateUsersService } from "../service/CreateUsersService";
import { DeleteUsersService } from "../service/DeleteUsersService";
import { ListUsersService } from "../service/ListUsersService";
import { ShowUsersService } from "../service/ShowUsersService";
import { UpdateUsersService } from "../service/UpdateUsersService";


export default class CreateUserController {

  public async index(request: Request, response: Response): Promise<Response> {
    const userService = new ListUsersService();

    const users = await userService.execute();

    return response.status(200).json(users);
  }

  public async getByEmail(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userService = new ShowUsersService();

    const user = await userService.execute(id);

    return response.status(200).json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, office, birthday, situation, password } = request.body;

    const userService = new CreateUsersService();

    const user = await userService.execute({
      name, email, office, birthday, situation, password
    });

    return response.status(200).json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, office, birthday, situation } = request.body;
    const { id } = request.params;

    const userService = new UpdateUsersService();

    const user = await userService.execute(id, {
      name, email, office, birthday, situation
    });

    return response.status(200).json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userService = new DeleteUsersService();

    await userService.execute(id);

    return response.status(200).json({});

  }

}

