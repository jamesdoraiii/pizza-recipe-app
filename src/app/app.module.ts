import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { RecipeDetailComponent } from './views/recipe-detail/recipe-detail.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NavbarComponent } from './components/shell/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { SearchComponent } from './views/search/search.component';
import { BookmarksComponent } from './views/bookmarks/bookmarks.component';
import { RecipesRowComponent } from './components/recipes-row/recipes-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeDetailComponent,
    RecipeCardComponent,
    NavbarComponent,
    JumbotronComponent,
    SearchComponent,
    BookmarksComponent,
    RecipesRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
