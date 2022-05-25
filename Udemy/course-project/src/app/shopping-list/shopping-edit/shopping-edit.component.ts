import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef!: ElementRef;
@ViewChild('amountInput') amountInputRef! : ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const currName = this.nameInputRef.nativeElement.value;
    const currAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(currName, currAmount);

    this.shoppingListService.addIngredient(newIngredient);

  }

}
