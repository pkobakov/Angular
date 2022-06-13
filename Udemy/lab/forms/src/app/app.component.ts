import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') signupForm: NgForm;
  defaultUsername = 'test'
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    console.log('Submitted!');
    console.log(this.signupForm);
  }



}
