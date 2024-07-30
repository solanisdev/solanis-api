import express from "express";
import userRoutes from "./infrastructure/web/routes/userRoutes";
import annotationRoutes from "./infrastructure/web/routes/annotationRoutes";
import dashboardRoutes from "./infrastructure/web/routes/dashboardRoutes";
import authRoutes from "./infrastructure/web/routes/authRoutes";
import dashboardWidgetRoutes from "./infrastructure/web/routes/dashboardWidgetRoutes";
import { authenticateToken } from "./shared/middlewares/AuthMiddleware";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/annotations", annotationRoutes);
app.use("/dashboards", dashboardRoutes);
app.use("/dashboard-widgets", dashboardWidgetRoutes);
app.use("/auth", authRoutes);
app.use(authenticateToken);

export default app;
