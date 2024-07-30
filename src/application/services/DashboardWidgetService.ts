import { DashboardWidget } from "../../domain/models/DashboardWidget";
import { IDashboardWidgetService } from "../../domain/services/IDashboardWidgetService";
import { DashboardWidgetRepository } from "../../infrastructure/repositories/DashboardWidgetRepository";

export class DashboardWidgetService implements IDashboardWidgetService {
  constructor(private dashboardWidgetRepository: DashboardWidgetRepository) {}

  async getDashboardWidgetById(id: string): Promise<DashboardWidget | null> {
    return this.dashboardWidgetRepository.findById(id)
  }

  async getDashboardWidgetsByDashboardId(
    dashboardId: string,
  ): Promise<DashboardWidget[] | null> {
    return this.dashboardWidgetRepository.findAllByDashboardId(dashboardId)
  }

  async createDashboardWidget(
    dashboardId: string,
    widget: string,
  ): Promise<DashboardWidget> {
    const dashboardWidget = new DashboardWidget(
      crypto.randomUUID(),
      dashboardId,
      widget)
    return this.dashboardWidgetRepository.save(dashboardWidget)
  }

  async updateDashboardWidget(
    dashboardWidget: DashboardWidget,
  ): Promise<DashboardWidget> {
    return this.dashboardWidgetRepository.save(dashboardWidget)
  }
}
