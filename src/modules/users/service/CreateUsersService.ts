import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import AppError from "@shared/errors/AppError";
import User from "../entity/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";



interface IRequest {

  name: string;
  email: string;
  office: string;
  birthday?: Date;
  situation?: number;
  password: string;

}

export class CreateUsersService {

  public async execute({ name, email, office, birthday, situation, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("There is already one user with this email!");
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      office,
      birthday,
      situation,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }

}
