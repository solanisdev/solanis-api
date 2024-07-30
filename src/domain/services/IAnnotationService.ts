import { Annotation } from "../models/Annotation";

export interface IAnnotationService {
  getAnnotationById(id: string): Promise<Annotation | null>;
  getAnnotationsByUserId(userId: string): Promise<Annotation[]>;
  createAnnotation(
    userId: string,
    title: string,
    content: string,
    icon: string,
  ): Promise<Annotation>;
}
