import { Router } from "express";
import { DashboardWidgetController } from "../controllers/DashboardWidgetController";

const router = Router();
const dashboardWdigetController = new DashboardWidgetController()

router.get("/:id", dashboardWdigetController.getWidgetById);
router.get("dashboard/:id", dashboardWdigetController.getWidgetsByDashboardId);
router.post("/", dashboardWdigetController.createWidget);

export default router;
