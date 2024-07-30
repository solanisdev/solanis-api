import { User } from "../models/User";

export interface IUserService {
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  createUser(
    email: string,
    name: string,
    username: string,
    password: string,
  ): Promise<User>;
  deleteUserById(id: string): Promise<void>;
}
