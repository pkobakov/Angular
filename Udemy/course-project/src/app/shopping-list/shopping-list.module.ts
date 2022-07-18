import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent }]

@NgModule({
    declarations: [
                   ShoppingListComponent,
                   ShoppingEditComponent,],
    imports:      [
                   FormsModule,
                   RouterModule.forChild(routes),
                   SharedModule]
})
export class ShoppingListModule {

}