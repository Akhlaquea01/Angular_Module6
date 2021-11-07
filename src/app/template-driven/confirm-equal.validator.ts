import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function equalValidator(data:string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isValid = control.value === "" || control.value === data;
        if(isValid) {
            return null;
        }else{
          return{
            passwordMatch:{
              allowedPassword:data
            }
          }
        }
    }

}
