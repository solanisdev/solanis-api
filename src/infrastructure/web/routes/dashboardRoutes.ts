import { Router } from "express";
import { DashboardController } from "../controllers/DashboardController";

const router = Router();
const dashboardController = new DashboardController();

router.get("/user/:userId", dashboardController.getDashboardByUserId);
router.post("/", dashboardController.createDashboard);

export default router;
