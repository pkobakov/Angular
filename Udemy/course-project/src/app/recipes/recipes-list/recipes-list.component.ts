import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(private recipeService: RecipeService,
              private activeRoute : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    this.recipeService.recipesChanged
    .subscribe((recipes: Recipe[]) =>
    this.recipes = recipes);

    this.recipes = this.recipeService.getRecipes();

  }

  onAddNewRecipe() {
     this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }

  

}
