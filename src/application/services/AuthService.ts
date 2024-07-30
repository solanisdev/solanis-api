import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { generateToken, verifyPassword } from "../../shared/utils/auth";

export class AuthService {
  constructor(private userRepository: IUserRepository) {}

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && verifyPassword(password, user.password)) {
      return generateToken(user.id);
    }
    return null;
  }
}
