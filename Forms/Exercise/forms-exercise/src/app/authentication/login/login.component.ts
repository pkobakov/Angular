import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model!: LoginModel;

  constructor() {
    this.model = new LoginModel('','');
   }


  ngOnInit(): void {
  }   
  
  
  login() {
     
  }



}
