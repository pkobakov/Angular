import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model!: LoginModel;
  loginFailed!: boolean;
  errMessage!: string;

  constructor(private loginService: AuthService) {
    this.model = new LoginModel('','');
   }


  ngOnInit(): void {
  }   
  
  
  login() {
    this.loginService.login(this.model)
                     .subscribe(data=>{

                     },
                     err => {

                     })
     
  }



}
