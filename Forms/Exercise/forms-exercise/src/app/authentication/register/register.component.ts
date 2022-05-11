import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model!: RegisterModel;
  loginFailed!: boolean;
  errorMessage!: string;


  constructor(private registerService: AuthService, private router: Router) {
    this.model = new RegisterModel('', '', '', '', '', '', 18);
  }

  ngOnInit(): void {
  }

  register(){

    this.registerService.register(this.model)
                        .subscribe(data => {
                          this.router.navigate(['/login']);
                        },
                        err => {
                          this.loginFailed = true;
                          this.errorMessage = err['error']['description'];
                          
                        })
  }

}
