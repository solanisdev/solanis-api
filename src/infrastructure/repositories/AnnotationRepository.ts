import { IAnnotationRepository } from "../../domain/repositories/IAnnotationRepository";
import { Annotation } from "../../domain/models/Annotation";
import prisma from "../database/prismaClient";

export class AnnotationRepository implements IAnnotationRepository {
  async findById(id: string): Promise<Annotation | null> {
    const annotation = await prisma.annotation.findUnique({
      where: { id },
    });
    return annotation
      ? new Annotation(
          annotation.id,
          annotation.title,
          annotation.userId,
          annotation.content,
          annotation.icon,
          annotation.createdAt,
          annotation.updatedAt,
        )
      : null;
  }

  async findAllByUserId(userId: string): Promise<Annotation[]> {
    const annotations = await prisma.annotation.findMany({
      where: { userId },
    });
    return annotations.map(
      (annotation) =>
        new Annotation(
          annotation.id,
          annotation.title,
          annotation.userId,
          annotation.content,
          annotation.icon,
          annotation.createdAt,
          annotation.updatedAt,
        ),
    );
  }

  async save(annotation: Annotation): Promise<Annotation> {
    const savedAnnotation = await prisma.annotation.upsert({
      where: {
        id: annotation.id,
      },
      update: {
        title: annotation.title,
        content: annotation.content,
        icon: annotation.icon,
      },
      create: {
        title: annotation.title,
        content: annotation.content,
        userId: annotation.userId,
        icon: annotation.icon,
      },
    });
    return new Annotation(
      savedAnnotation.id,
      savedAnnotation.title,
      savedAnnotation.content,
      savedAnnotation.userId,
      savedAnnotation.icon,
      savedAnnotation.createdAt,
      savedAnnotation.updatedAt,
    );
  }
  
  async deleteById(id: string): Promise<void> {
    await prisma.annotation.delete({
      where: { id },
    });
  }
}
