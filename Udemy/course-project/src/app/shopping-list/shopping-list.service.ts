// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // ingredientChanged = new EventEmitter<Ingredient[]>();
   ingredientChanged = new Subject<Ingredient[]>();
   startedEditing = new Subject<number>();

   private ingredients: Ingredient [] =
    [
        new Ingredient ('Apples', 5),
        new Ingredient ('Tomatoes', 7),
        new Ingredient ('Potatoes', 10)
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngrredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
       this.ingredients[index]  = newIngredient;
       this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    
}