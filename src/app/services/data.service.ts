import { Injectable } from '@angular/core';
import { Recipe } from '@models/recipe';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllRecipes(): [Recipe] {
    return [
      {
        id: 1,
        imageLink: 'https://i.redd.it/k31tprm0cnz31.jpg',
        prepTime: '20 min',
        activeTime: '20 min',
        title: 'Jabbos Famous Pizza From Italy',
        avgRating: 5,
        numberOfReviews: 120,
      },
    ];
  }
}
