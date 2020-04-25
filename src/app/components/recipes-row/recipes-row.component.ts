import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '@models/recipe';

@Component({
  selector: 'app-recipes-row',
  templateUrl: './recipes-row.component.html',
  styleUrls: ['./recipes-row.component.scss'],
})
export class RecipesRowComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}

  paginate() {
    //here you need to paginate the items if the screen size is not mobile?
  }
}
