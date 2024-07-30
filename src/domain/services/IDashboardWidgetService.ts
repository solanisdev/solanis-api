import { DashboardWidget } from "../models/DashboardWidget";

export interface IDashboardWidgetService {
  getDashboardWidgetById(id: string): Promise<DashboardWidget | null>;
  getDashboardWidgetsByDashboardId(
    dashboardId: string,
  ): Promise<DashboardWidget[] | null>;
  createDashboardWidget(
    dashboardId: string,
    widget: string,
  ): Promise<DashboardWidget>;
  updateDashboardWidget(
    dashboardWidget: DashboardWidget,
  ): Promise<DashboardWidget>;
}
