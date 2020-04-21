import { Injectable } from '@angular/core';
import { Recipe } from '@models/recipe';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllRecipes(): Recipe[] {
    return [
      {
        id: 1,
        imageLink: 'https://i.redd.it/k31tprm0cnz31.jpg',
        prepTime: '20 min',
        activeTime: '20 min',
        title: 'Jabbos Famous Pizza From Italy',
        avgRating: 5,
        numberOfReviews: 120,
        category: 'sicilian',
      },
      {
        id: 1,
        imageLink: 'https://i.redd.it/nzuztqgvpdv31.jpg',
        prepTime: '20 min',
        activeTime: '20 min',
        title: "Helen's homemade Pizza",
        avgRating: 5,
        numberOfReviews: 120,
        category: 'sicilian',
      },
      {
        id: 1,
        imageLink: 'https://i.redd.it/7n3tuetejnm41.jpg',
        prepTime: '20 min',
        activeTime: '20 min',
        title: 'Jimmys Neopolitan',
        avgRating: 5,
        numberOfReviews: 120,
        category: 'sicilian',
      },
    ];
  }
}
