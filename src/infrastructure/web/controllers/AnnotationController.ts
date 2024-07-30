import { Request, Response } from "express";
import { AnnotationService } from "../../../application/services/AnnotationService";
import { AnnotationRepository } from "../../repositories/AnnotationRepository";

const annotationRepository = new AnnotationRepository();
const annotationService = new AnnotationService(annotationRepository);

export class AnnotationController {
  async getAnnotationById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const annotation = await annotationService.getAnnotationById(id);
    return annotation
      ? res.json(annotation)
      : res.status(404).json({ error: "Annotation not found" });
  }

  async getAnnotationsByUserId(req: Request, res: Response): Promise<Response> {
    const userId = req.params.userId;
    const annotations = await annotationService.getAnnotationsByUserId(userId);
    return res.json(annotations);
  }

  async createAnnotation(req: Request, res: Response): Promise<Response> {
    const { userId, title, content, icon } = req.body;
    const annotation = await annotationService.createAnnotation(
      userId,
      title,
      content,
      icon,
    );

    return res.status(201).json(annotation);
  }
}
