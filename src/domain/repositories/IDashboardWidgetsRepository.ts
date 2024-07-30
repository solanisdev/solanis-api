import { DashboardWidget } from "../models/DashboardWidget";

export interface IDashboardWidgetsRepository {
  findById(id: string): Promise<DashboardWidget | null>;
  findAllByDashboardId(dashboardId: string): Promise<DashboardWidget[] | null>;
  save(dashboardWidget: DashboardWidget): Promise<DashboardWidget>;
}
