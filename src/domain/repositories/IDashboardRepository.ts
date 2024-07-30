import { Dashboard } from "../models/Dashboard";

export interface IDashboardRepository {
  findByUserId(userId: string): Promise<Dashboard | null>;
  save(dashboard: Dashboard): Promise<Dashboard>;
}
