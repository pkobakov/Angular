import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    // selectedRecipe = new EventEmitter<Recipe>();
    // selectedRecipe = new Subject<Recipe>();
   recipesChanged = new Subject<Recipe[]>();
   private recipes: Recipe [] = [
        new Recipe ('Pizza Margherita',
                    'Some description here' ,
                    'https://upload.wikimedia.org/wikipedia/commons/e/ee/Eq_it-na_pizza-margherita_sep2005_sml-2.png',
                    [
                        new Ingredient('tomato sauce', 200),
                        new Ingredient('mozzarela', 150)    
                    ]),
        new Recipe ('Tasty Hamburguer',
                    'Some description here' ,
                    'https://www.imagensempng.com.br/wp-content/uploads/2021/08/03-19.png',
                    [
                        new Ingredient ('beef meat', 150),
                        new Ingredient ('cedar', 100)
                    ]),        
      ];

      constructor(private shoppingListService : ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngrredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      
}