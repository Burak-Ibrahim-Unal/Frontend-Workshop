import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Meat", 1),
    new Ingredient("Tomato", 3),
    new Ingredient("Garlic", 1),
    new Ingredient("Onion", 2),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
