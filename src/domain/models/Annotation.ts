export class Annotation {
  constructor(
    public id: string,
    public title: string,
    public userId: string,
    public content: string,
    public icon: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
