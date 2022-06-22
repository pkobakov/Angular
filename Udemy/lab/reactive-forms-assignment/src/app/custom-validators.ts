import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

    static invalidProjectName(control: FormControl): {[errorName: string]: boolean} {
        if (control.value === 'Test') {
            return {'invalidProjectName': true};
        }
        return null as any;
    }

    static asyncInvalidProjectName (control: AbstractControl) : Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'TestProject') {
                    resolve({'invalidProjectName': true});
                } else {
                    resolve(null);
                }
                
            }, 2000);
        })
        return promise;
    }

    

}