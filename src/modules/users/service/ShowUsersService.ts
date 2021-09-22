import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import User from "../entity/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";


export class ShowUsersService {

  public async execute(id: string): Promise<User | undefined> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError("User not found!");
    }

    return user;
  }

}
