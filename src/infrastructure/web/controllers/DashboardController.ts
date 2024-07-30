import { Request, Response } from "express";
import { DashboardService } from "../../../application/services/DashboardService";
import { DashboardRepository } from "../../repositories/DashboardRepository";

const dashboardRepository = new DashboardRepository();
const dashboardService = new DashboardService(dashboardRepository);

export class DashboardController {
  async getDashboardByUserId(req: Request, res: Response): Promise<Response> {
    const userId = req.params.userId;
    const dashboard = await dashboardService.getDashboardByUserId(userId);
    return dashboard
      ? res.json(dashboard)
      : res.status(404).json({ error: "Dashboard not created" });
  }
  
  async createDashboard(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;
    const dashboard = await dashboardService.createDashboard(userId);
    return res.status(201).json(dashboard);
  }
}
