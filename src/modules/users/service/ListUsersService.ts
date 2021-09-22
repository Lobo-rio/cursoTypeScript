import { getCustomRepository } from "typeorm";

import User from "../entity/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";


export class ListUsersService {

  public async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return users;
  }

}
