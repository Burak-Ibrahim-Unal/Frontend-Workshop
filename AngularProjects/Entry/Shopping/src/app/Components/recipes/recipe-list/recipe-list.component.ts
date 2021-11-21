import { Recipe } from './../../../Models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1","Recipe 1 Desc","https://www.seraf.com.tr/dana-kiyma-500-g-seraf-1779-25-B.jpg"),
    new Recipe("Recipe 2","Recipe 2 Desc","https://productimages.hepsiburada.net/s/20/1500/9864072822834.jpg"),
    new Recipe("Recipe 3","Recipe 3 Desc","https://d2uiaykj5yb3c0.cloudfront.net/onur/img/p/4aa71255-7c40-49ce-a72b-f7dda3ac8305.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
