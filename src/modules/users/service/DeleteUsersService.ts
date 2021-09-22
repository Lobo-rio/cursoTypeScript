import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import { UserRepository } from "../typeorm/repositories/UserRepository";

export class DeleteUsersService {

  public async execute(id: string): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError("User not found!");
    }

    await userRepository.remove(user);

  }

}

