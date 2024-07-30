import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/models/User";
import prisma from "../database/prismaClient";
import { hashPassword } from "../../shared/utils/auth";

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user
      ? new User(
          user.id,
          user.email,
          user.name,
          user.username,
          user.password,
          user.createdAt,
          user.updatedAt,
        )
      : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user
      ? new User(
          user.id,
          user.email,
          user.name,
          user.username,
          user.password,
          user.createdAt,
          user.updatedAt,
        )
      : null;
  }

  async save(user: User): Promise<User> {
    const hashedPassword = hashPassword(user.password);

    const savedUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        username: user.username,
        password: hashedPassword,
        updatedAt: new Date(),
      },
      create: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        password: hashedPassword,
        createdAt: new Date(),
      },
    });
    return new User(
      savedUser.id,
      savedUser.email,
      savedUser.name,
      hashedPassword, 
      savedUser.password,
      savedUser.createdAt,
      savedUser.updatedAt,
    );
  }

  async deleteById(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
