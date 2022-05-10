import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: any = {}
  constructor(private _router: Router,
              private _auth: AuthService ) { }

  

  ngOnInit(): void {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
              .subscribe({next: (res:any)=>{
                console.log(res);
                localStorage.setItem('token', res.token);
                this._router.navigate(['/special']);
              }, 
               error: (err: any) => {
                 console.log(err);
               }
            })
  }

  

}
