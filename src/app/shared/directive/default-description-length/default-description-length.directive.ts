import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appDefaultDescriptionLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: DefaultDescriptionLengthDirective, multi: true}]
})
export class DefaultDescriptionLengthDirective implements Validator {

  MIN_LENGTH = 5;
  MAX_LENGTH = 512;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let descriptionLen = control.value ? control.value.length : 0;

    if (descriptionLen < this.MIN_LENGTH) {
      return {appCourseDescriptionLength: `Min length must be greater or equal to ${this.MIN_LENGTH}`};
    } else if (descriptionLen > this.MAX_LENGTH) {
      return {appCourseDescriptionLength: `Max length must be less or equal to ${this.MAX_LENGTH}`};
    }

    return null;
  }

}
