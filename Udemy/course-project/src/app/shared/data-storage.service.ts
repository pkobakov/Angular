import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  url = 'https://the-recipe-book-39317-default-rtdb.firebaseio.com/recipes.json';


  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private autService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.url,recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
          .get<Recipe[]>(this.url)
          .pipe(
              map(recipes => {
                return recipes.map(recipe => {
                  return {
                             ...recipe,
                             ingredients: recipe.ingredients ? recipe.ingredients : []
                 };
              });
            }),
              tap(recipes => {
            this.recipeService.setRecipes(recipes);
          })
        );
      }
}
