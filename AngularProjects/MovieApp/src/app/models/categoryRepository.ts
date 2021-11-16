import { Category } from './category';
export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, title: "Action" },
      { id: 2, title: "Science-Fiction" },
      { id: 3, title: "Drama" },
      { id: 4, title: "Comedy" },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

}
