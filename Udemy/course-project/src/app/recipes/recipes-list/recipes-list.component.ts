import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  subscription!: Subscription;

  constructor(private recipeService: RecipeService,
              private activeRoute : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
   this.subscription = this.recipeService.recipesChanged
    .subscribe((recipes: Recipe[]) =>
    this.recipes = recipes);

    this.recipes = this.recipeService.getRecipes();

  }

  onAddNewRecipe() {
     this.router.navigate(['new'], {relativeTo: this.activeRoute});
     
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();  
}  

}
