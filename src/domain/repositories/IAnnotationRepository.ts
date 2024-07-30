import { Annotation } from "../models/Annotation";

export interface IAnnotationRepository {
  findById(id: string): Promise<Annotation | null>;
  findAllByUserId(userId: string): Promise<Annotation[]>;
  save(annotation: Annotation): Promise<Annotation>;
  deleteById(id: string): Promise<void>;
}
