
import { AbstractControl,  FormGroup,  ValidationErrors, Validators} from "@angular/forms";


export class PassworsValidators {
    static validateOldPassword(control: AbstractControl) : Validators | null {

        return new Promise((resolve) => {
            if (control.value !== '1234') {
                return resolve({invalidOldPassword: true});
            }

            else {
                resolve(null);
            }
        });
        
    }

    static passwordShouldMatch (control: AbstractControl) : Validators | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value) {

            return {passwordsShouldMatch: true};
        }

        return null;
    }
}