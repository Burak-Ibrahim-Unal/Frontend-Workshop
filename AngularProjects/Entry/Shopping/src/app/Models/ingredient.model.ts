export class Ingredient {
  public name: string;
  public amount: number;

  constructor(ingName: string, ingAmount: number) {
    this.amount = ingAmount;
    this.name = ingName;
  }
}
