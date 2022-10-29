import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pav Bhaji','Pav bhaji is a thick vegetable curry served with a soft bread roll .',
    'https://thumbs.dreamstime.com/z/indian-dish-pav-bhaji-mix-vegetable-curry-served-buttered-buns-also-known-as-ladi-very-popular-snack-meal-western-158573801.jpg'),
    new Recipe('Pav Bhaji','Pav bhaji is a thick vegetable curry served with a soft bread roll .',
    'https://thumbs.dreamstime.com/z/indian-dish-pav-bhaji-mix-vegetable-curry-served-buttered-buns-also-known-as-ladi-very-popular-snack-meal-western-158573801.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
