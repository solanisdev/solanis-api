import { Dashboard } from "../../domain/models/Dashboard";
import { IDashboardRepository } from "../../domain/repositories/IDashboardRepository";
import { IDashboardService } from "../../domain/services/IDashboardService";

export class DashboardService implements IDashboardService {
  constructor(private dashboardRepository: IDashboardRepository) {}

  async getDashboardByUserId(userId: string): Promise<Dashboard | null> {
    return this.dashboardRepository.findByUserId(userId);
  }

  async createDashboard(userId: string): Promise<Dashboard> {
    const dashboard = new Dashboard(crypto.randomUUID(), userId, new Date());
    return this.dashboardRepository.save(dashboard);
  }
}
