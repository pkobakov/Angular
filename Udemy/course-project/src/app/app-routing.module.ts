import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: 'src/shopping-list/shopping-list.module@ShoppingListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
