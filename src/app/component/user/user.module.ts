import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesUsersListComponent} from './courses-users-list/courses-users-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "@app/component/user/user-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import {ValidationDirectiveModule} from "@app/shared/directive/validation-directive.module";
import {FormsModule} from "@angular/forms";
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    CoursesUsersListComponent,
    UserListComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserAddComponent
  ],
  exports: [
    CoursesUsersListComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ValidationDirectiveModule,
    FormsModule
  ]
})
export class UserModule {
}
