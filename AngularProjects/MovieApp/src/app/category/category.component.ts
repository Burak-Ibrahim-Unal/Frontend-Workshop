import { CategoryRepository } from '../models/categoryRepository';
import { Category } from '../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor() {
    this.categories = new CategoryRepository().getCategories();
  }

  ngOnInit(): void {
  }




}
