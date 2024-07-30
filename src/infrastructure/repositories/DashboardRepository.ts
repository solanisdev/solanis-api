import { Dashboard } from "../../domain/models/Dashboard";
import { IDashboardRepository } from "../../domain/repositories/IDashboardRepository";
import prisma from "../database/prismaClient";

export class DashboardRepository implements IDashboardRepository {
  async findByUserId(userId: string): Promise<Dashboard | null> {
    const dashboard = await prisma.dashboard.findFirst({
      where: {
        userId: userId,
      },
    });
    return dashboard
      ? new Dashboard(dashboard.id, dashboard.userId, dashboard.updatedAt)
      : null;
  }

  async save(dashboard: Dashboard): Promise<Dashboard> {
    const savedDashboard = await prisma.dashboard.upsert({
      where: {
        userId: dashboard.userId,
      },
      update: {
        updatedAt: new Date(),
      },
      create: {
        userId: dashboard.userId,
        updatedAt: new Date(),
      },
    });
    return new Dashboard(
      savedDashboard.id,
      savedDashboard.userId,
      savedDashboard.updatedAt,
    );
  }
}
