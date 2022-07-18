import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', redirectTo: '/recipes',
    pathMatch: 'full'
  },

  { 
    path: 'recipes', 
    loadChildren: () => import('src/app/recipes/recipes.module').then(m => m.RecipesModule)
  },

  { 
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'shopping-list',
    loadChildren: () => import('src/app/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
