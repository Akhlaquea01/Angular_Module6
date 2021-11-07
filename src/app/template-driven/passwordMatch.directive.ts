import  {Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { equalValidator } from './confirm-equal.validator';

@Directive({
selector: '[passwordMatch]',
providers: [ { provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true } ]
})

export class PasswordMatchDirective implements Validator {
  validate(c:FormControl){
    return equalValidator("cat")(c);
  }
}
