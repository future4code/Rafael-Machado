export class Product {

  constructor(
    private name: string,
    private tags: string,
    private id?: string,
  ) { }

  public getId = (): string | undefined => this.id
  public getName = (): string => this.name
  public getTags = (): string => this.tags
}
