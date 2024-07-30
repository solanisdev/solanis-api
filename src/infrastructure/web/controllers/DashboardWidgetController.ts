import { Request, Response } from "express";
import { DashboardWidgetService } from "../../../application/services/DashboardWidgetService";
import { DashboardWidgetRepository } from "../../repositories/DashboardWidgetRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../../../application/services/UserService";
import { DashboardRepository } from "../../repositories/DashboardRepository";
import { DashboardService } from "../../../application/services/DashboardService";

const dashboardWidgetRepository = new DashboardWidgetRepository();
const dashboardWidgetService = new DashboardWidgetService(
  dashboardWidgetRepository,
);
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const dashboardRepository = new DashboardRepository();
const dashboardService = new DashboardService(dashboardRepository);

export class DashboardWidgetController {
  async getWidgetById(req: Request, res: Response): Promise<Response> {
    const widgetId = req.params.widgetId;
    const widget =
      await dashboardWidgetService.getDashboardWidgetById(widgetId);
    return widget
      ? res.json(widget)
      : res.status(404).json({ error: "Widget not found" });
  }

  async getWidgetsByDashboardId(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const dashboardId = req.params.dashboardId;
    if (!dashboardId) {
      return res.status(400).json({ error: "DashboardId is required" });
    }

    const widgets =
      await dashboardWidgetService.getDashboardWidgetsByDashboardId(
        dashboardId,
      );
    return widgets
      ? res.json(widgets)
      : res.status(404).json({ error: "Widgets not found" });
  }

  async createWidget(req: Request, res: Response): Promise<Response> {
    const { widget } = req.body;
    if (!widget) {
      return res.status(400).json({ error: "Widget content is required" });
    }

    const user = await userService.getUserById(req.body.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const dashboard = await dashboardService.getDashboardByUserId(user.id);
    if (!dashboard) {
      return res.status(404).json({ error: "Dashboard not found" });
    }

    const newWidget = await dashboardWidgetService.createDashboardWidget(
      widget,
      dashboard.id,
    );

    return newWidget
      ? res.status(201).json(newWidget)
      : res.status(400).json({ error: "Internal server error" });
  }
}
