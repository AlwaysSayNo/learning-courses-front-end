import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultTitleLengthDirective} from "./default-title-length/default-title-length.directive";
import {DefaultDescriptionLengthDirective} from "./default-description-length/default-description-length.directive";


@NgModule({
  declarations: [
    DefaultTitleLengthDirective,
    DefaultDescriptionLengthDirective,
  ],
  exports: [
    DefaultTitleLengthDirective,
    DefaultDescriptionLengthDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ValidationDirectiveModule {
}
