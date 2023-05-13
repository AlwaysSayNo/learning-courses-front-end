import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appNumberSegment]',
  providers: [{provide: NG_VALIDATORS, useExisting: NumberSegmentDirective, multi: true}]
})
export class NumberSegmentDirective implements Validator {

  @Input('appNumberSegment') numberSegment = '';

  MINUS_INF = '-inf';
  INF = 'inf';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === undefined || control.value === null) {
      return null;
    } else if (!this.numberSegment) {
      throw new Error();
    }

    let tokens = this.numberSegment.split(',');
    if (tokens.length != 2) {
      throw new Error();
    }

    for (let i = 0; i < 2; ++i) {
      let token = tokens[i].trim();
      tokens[i] = token;

      if (isNaN(+token) && token !== this.INF && token !== this.MINUS_INF) {
        throw new Error();
      }
    }

    return this.validateSegment(tokens, control.value) ?
      null :
      {appNumberSegment: `Number must be in segment: [${tokens[0]}, ${tokens[1]}]`};
  }

  private validateSegment(tokens: string[], value: number): boolean {
    let left = !isNaN(+tokens[0]) ? +tokens[0] : tokens[0] === this.INF ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
    let right = !isNaN(+tokens[1]) ? +tokens[1] : tokens[1] === this.INF ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;

    return left <= value && value <= right;
  }


}
