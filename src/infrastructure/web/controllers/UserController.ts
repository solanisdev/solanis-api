import { Request, Response } from "express";
import { UserService } from "../../../application/services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export class UserController {
  async getUserByUUID(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    return user
      ? res.json(user)
      : res.status(404).json({ error: "User not found" });
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { email, name, username, password } = req.body;
    const user = await userService.createUser(email, name, username, password);
    return user ? res.status(201).json(user) : res.status(400).json({ error: "Internal server error" });
  }

  async deleteUserByUUID(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    await userService.deleteUserById(id);
    return res.status(200).json({ message: "User deleted successfully" });
  }
}
