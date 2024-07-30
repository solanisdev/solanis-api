import { DashboardWidget } from "../../domain/models/DashboardWidget";
import { IDashboardWidgetsRepository } from "../../domain/repositories/IDashboardWidgetsRepository";
import prisma from "../database/prismaClient";

export class DashboardWidgetRepository implements IDashboardWidgetsRepository {
  async findById(id: string): Promise<DashboardWidget | null> {
    const dashboardWidget = await prisma.dashboardWidget.findUnique({
      where: { id },
    });
    return dashboardWidget
      ? new DashboardWidget(
          dashboardWidget.id,
          dashboardWidget.dashboardId,
          dashboardWidget.widget,
        )
      : null;
  }
  
  async findAllByDashboardId(dashboardId: string): Promise<DashboardWidget[] | null> {
    const dashboardWidgets = await prisma.dashboardWidget.findMany({
      where: { dashboardId },
    });
    return dashboardWidgets.map(
      (dashboardWidget) =>
        new DashboardWidget(
          dashboardWidget.id,
          dashboardWidget.dashboardId,
          dashboardWidget.widget,
        ),
    );
  }
  
  async save(dashboardWidget: DashboardWidget): Promise<DashboardWidget> {
    const savedDashboardWidget = await prisma.dashboardWidget.upsert({
      where: {
        id: dashboardWidget.id,
      },
      update: {
        widget: dashboardWidget.widget,
      },
      create: {
        dashboardId: dashboardWidget.dashboardId,
        widget: dashboardWidget.widget,
      },
    });
    return new DashboardWidget(
      savedDashboardWidget.id,
      savedDashboardWidget.dashboardId,
      savedDashboardWidget.widget,
    );
  }
}
