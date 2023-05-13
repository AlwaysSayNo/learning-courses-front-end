import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appDefaultTitleLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: DefaultTitleLengthDirective, multi: true}]
})
export class DefaultTitleLengthDirective implements Validator {

  MIN_LENGTH = 5;
  MAX_LENGTH = 100;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let titleLen = control.value ? control.value.length : 0;

    if (titleLen < this.MIN_LENGTH) {
      return {appCourseTitleLength: `Min length must be greater or equal to ${this.MIN_LENGTH}`};
    } else if (titleLen > this.MAX_LENGTH) {
      return {appCourseTitleLength: `Max length must be less or equal to ${this.MAX_LENGTH}`};
    }

    return null;
  }

}
