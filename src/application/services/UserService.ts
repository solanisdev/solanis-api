import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUserService } from "../../domain/services/IUserService";
import { User } from "../../domain/models/User";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async createUser(
    email: string,
    name: string,
    username: string,
    password: string,
  ): Promise<User> {
    const user = new User(
      crypto.randomUUID(),
      email,
      name,
      username,
      password,
      new Date(),
      new Date(),
    );
    return this.userRepository.save(user);
  }

  async deleteUserById(id: string): Promise<void> {
    return this.userRepository.deleteById(id);
  }
}
