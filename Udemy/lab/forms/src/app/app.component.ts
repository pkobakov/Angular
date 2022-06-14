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

    // To fill the whole form:
    
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    // To fill proper field of the form:
    this.signupForm.form.patchValue({userData: {
      username: suggestedName
    }
   })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    console.log('Submitted!');
    console.log(this.signupForm);
  }



}
