import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultTitleLengthDirective} from "./default-title-length/default-title-length.directive";
import {DefaultDescriptionLengthDirective} from "./default-description-length/default-description-length.directive";
import { NumberSegmentDirective } from './number-segment/number-segment.directive';


@NgModule({
  declarations: [
    DefaultTitleLengthDirective,
    DefaultDescriptionLengthDirective,
    NumberSegmentDirective,
  ],
  exports: [
    DefaultTitleLengthDirective,
    DefaultDescriptionLengthDirective,
    NumberSegmentDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class ValidationDirectiveModule {
}
