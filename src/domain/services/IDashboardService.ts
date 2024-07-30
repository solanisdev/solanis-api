import { Dashboard } from "../models/Dashboard";

export interface IDashboardService {
  getDashboardByUserId(userId: string): Promise<Dashboard | null>;
  createDashboard(userId: string): Promise<Dashboard>;
}
