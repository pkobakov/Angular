import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})


export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective; 

    constructor(private authService: AuthService,
                private router: Router,
                private alerComponentFactory: ComponentFactoryResolver) {

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        console.log(form.value);
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;



        if (this.isLoginMode) {
          authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(
            resData => {
                this.isLoading = false;
                console.log(resData);
                this.router.navigate(['/recipes']);
                
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
               
                
            }
        );
      form.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string){
    //    const alerComponent  = new AlertComponent(); 
      const alertComponentFactory = this.alerComponentFactory.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.alertHost.viewContainerRef;
      hostViewContainerRef.clear();

      hostViewContainerRef.createComponent(alertComponentFactory);


    }
}