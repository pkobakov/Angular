import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData {
idToken:string;
email:string;	
refreshToken:string	
expiresIn:string;
localId:string;
registered?: boolean;
}

@Injectable()
export class AuthService {
    //copy the API KEY from Project Settings in Firebase Project Overview
    signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqonu4zo_vj-TTFuME4RcRBkU637rfymQ';
    logInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqonu4zo_vj-TTFuME4RcRBkU637rfymQ';

    user = new Subject<User>();

    constructor(private  http: HttpClient) {
    }

    signup(email: string, password: string) {
       return this.http.post<AuthResponseData>(
         this.signUpUrl, 
       {
         email: email,
         password: password,
         returnSecureToken: true
       }).pipe(
          catchError(this.handleError), tap(resData => {
            this.handleAuthentication(
                                      resData.localId,
                                      resData.email,
                                      resData.idToken,
                                      +resData.expiresIn)
                                }
           )
        );
    }

    login(email:string, password: string){

        return this.http.post<AuthResponseData>(this.logInUrl,
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(
            catchError(this.handleError), tap( resData => {
                this.handleAuthentication(
                    resData.localId,
                    resData.email,
                    resData.idToken,
                    +resData.expiresIn
                )
            }));
    }

    private handleAuthentication(userId: string, email:string, token: string, expiresIn: number) {

        const expirationDate = new Date(new Date().getTime()+ +expiresIn*1000);
        const user = new User( email, userId, token, expirationDate );

        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          } switch(errorRes.error.error.message){

            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists!';
                break;

            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid password!';
                break;

            case 'EMAIL_NOT_FOUND': 
                errorMessage = 'This email does not exist!';
                break;           
        }

        return throwError(errorMessage);
    }
    
}