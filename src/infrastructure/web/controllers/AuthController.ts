import { Request, Response } from 'express';
import { AuthService } from '../../../application/services/AuthService';
import { UserRepository } from '../../repositories/UserRepository';

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    if (token) {
      return res.json({ token });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }
}