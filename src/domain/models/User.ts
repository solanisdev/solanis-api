export class User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public username: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
