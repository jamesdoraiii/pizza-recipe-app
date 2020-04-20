import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { RecipesForCategoryComponent } from './views/recipes-for-category/recipes-for-category.component';
import { RecipeDetailComponent } from './views/recipe-detail/recipe-detail.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import { NavbarComponent } from './components/shell/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesForCategoryComponent,
    RecipeDetailComponent,
    RecipeCardComponent,
    RecipeListItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
