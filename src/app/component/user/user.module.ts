import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesUsersListComponent} from './courses-users-list/courses-users-list.component';


@NgModule({
  declarations: [
    CoursesUsersListComponent
  ],
  exports: [
    CoursesUsersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
}
