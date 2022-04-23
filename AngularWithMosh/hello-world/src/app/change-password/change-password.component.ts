import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassworsValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{
  form:  FormGroup;
  constructor(fb: FormBuilder){
    this.form= fb.group({
      oldPassword: [null, Validators.required, 
                        PassworsValidators.validateOldPassword],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    },{validators:  PassworsValidators.passwordShouldMatch});
  }

get oldPassword() {return this.form.get('oldPassword')};
get newPassword() {return this.form.get('newPassword')};
get confirmPassword() {return this.form.get('confirmPassword')};
}
