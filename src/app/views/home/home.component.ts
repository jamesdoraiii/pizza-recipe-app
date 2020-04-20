import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Recipe } from '@models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: [Recipe];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.recipes = this.data.getAllRecipes();
  }
}
