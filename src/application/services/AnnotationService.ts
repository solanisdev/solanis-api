import { IAnnotationRepository } from "../../domain/repositories/IAnnotationRepository";
import { IAnnotationService } from "../../domain/services/IAnnotationService";
import { Annotation } from "../../domain/models/Annotation";

export class AnnotationService implements IAnnotationService {
  constructor(private annotationRepository: IAnnotationRepository) {}

  async getAnnotationById(id: string): Promise<Annotation | null> {
    return this.annotationRepository.findById(id);
  }

  async getAnnotationsByUserId(userId: string): Promise<Annotation[]> {
    return this.annotationRepository.findAllByUserId(userId);
  }

  async createAnnotation(
    userId: string,
    title: string,
    content: string,
    icon: string,
  ): Promise<Annotation> {
    const annotation = new Annotation(
      crypto.randomUUID(),
      title,
      content,
      userId,
      icon,
      new Date(),
      new Date(),
    );
    return this.annotationRepository.save(annotation);
  }
}
