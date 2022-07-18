import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', redirectTo: '/recipes',
    pathMatch: 'full'
  },

  { 
    path: 'recipes', 
    loadChildren: 'src/app/recipes/recipes.module#RecipesModule'
  },

  { 
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },

  {
    path: 'shopping-list',
    loadChildren: 'src/app/shopping-list/shopping-list.module#ShoppingListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
