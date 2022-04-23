import { AbstractControl, ValidationErrors} from "@angular/forms";


export class UsernameValidators {
   static  cannotContainSpace (control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0 ) {
            return  {cannotContainSpace: true}
        }

        return null;
   }

//    async Validators:

   static shouldBeUnique(control: AbstractControl) : Promise <ValidationErrors | null> {
    return new Promise ((resolve,reject) : void =>{
        setTimeout(() => {
            if (control.value === 'petar') {
                resolve ({shouldBeUnique:true});
            }

            else {
                resolve(null);
            }
          }, 5000);
    });  
    
  }
}