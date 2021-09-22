import { getCustomRepository } from "typeorm";

import AppError from "@shared/errors/AppError";
import User from "../entity/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";


interface IRequest {

  name: string;
  email: string;
  office: string;
  birthday: Date;
  situation: number;

}

export class UpdateUsersService {

  public async execute(id: string, { name, email, office, birthday, situation }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);
    if (!user) {
      throw new AppError("User not found!");
    }

    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
      throw new AppError("There is already one user with this email!");
    }

    user.name = name;
    user.email = email;
    user.office = office;
    user.birthday = birthday;
    user.situation = situation;

    await userRepository.save(user);

    return user;
  }

}
