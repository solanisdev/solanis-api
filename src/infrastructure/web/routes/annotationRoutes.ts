import { Router } from "express";
import { AnnotationController } from "../controllers/AnnotationController";

const router = Router();
const annotationController = new AnnotationController();

router.get("/:id", annotationController.getAnnotationById);
router.get("/user/:userId", annotationController.getAnnotationsByUserId);
router.post("/", annotationController.createAnnotation);

export default router;
