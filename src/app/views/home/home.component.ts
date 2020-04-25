import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Recipe } from '@models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mostPopularRecipes: Recipe[];
  newYorkRecipes: Recipe[];
  chicagoRecipes: Recipe[];
  sicilianRecipes: Recipe[];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    console.log(this.data.getAllRecipes());
    this.mostPopularRecipes = this.data.getMostPopular();
    this.newYorkRecipes = this.data.getRecipesByCategory('neopolitan');
    this.chicagoRecipes = this.data.getRecipesByCategory('chicago');
    this.sicilianRecipes = this.data.getRecipesByCategory('detroit');
  }
}
