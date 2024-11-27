//login.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Ejemplo estructura función
export function customDateExpiration(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo = control.value
    let expirationDate = new Date(valorCampo);
    let today = new Date();
    if (expirationDate >= today || valorCampo == ''){
        return null;
    }
    return{invalidDate : true}
    //TODO

    const isValid = true /* condición para validar el valor */;
    return isValid ? null : { customErrorKey: true }; // Error si no es válido
  };
}

export function customPriority() : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    let valorCampo = control.value;
    if (valorCampo == 'H' || valorCampo == 'M' || valorCampo == 'L' || valorCampo == ''){
      return null;
    }
    return{invalidPriority : true}
  };
}