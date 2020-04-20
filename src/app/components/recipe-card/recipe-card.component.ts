import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '@models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeLink: string;

  constructor() {}

  ngOnInit(): void {
    this.recipeLink = `background-image: url(${this.recipe.imageLink})`;
  }
}
