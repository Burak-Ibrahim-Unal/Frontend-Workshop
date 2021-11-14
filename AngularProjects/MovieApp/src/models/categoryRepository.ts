import { Category } from './category';
export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, name: "Action" },
      { id: 2, name: "Science-Fiction" },
      { id: 3, name: "Drama" },
      { id: 4, name: "Comedy" },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

}
