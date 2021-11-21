import { CategoryRepository } from '../models/categoryRepository';
import { Category } from '../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]

})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category = null;


  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  displayAll = true;
  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
