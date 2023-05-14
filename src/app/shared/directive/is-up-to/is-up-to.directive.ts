import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appIsUpTo]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsUpToDirective, multi: true}]
})
export class IsUpToDirective implements Validator {

  @Input() left!: string;
  @Input() right!: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.left || !this.right) {
      return null;
    }

    let lhs = control.get(this.left)?.value, rhs = control.get(this.right)?.value;
    return Number(lhs) <= Number(rhs) ? null :
      {appIsUpTo: `Field ${this.left} is more than ${this.right}`};
  }

}
