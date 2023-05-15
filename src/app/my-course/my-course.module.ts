import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyCourseRoutingModule} from './my-course-routing.module';
import {MyCourseListComponent} from './my-course-list/my-course-list.component';
import {MyCourseDetailsComponent} from './my-course-details/my-course-details.component';
import {UserModule} from "../user/user.module";


@NgModule({
  declarations: [
    MyCourseListComponent,
    MyCourseDetailsComponent
  ],
  imports: [
    CommonModule,
    MyCourseRoutingModule,
    UserModule
  ]
})
export class MyCourseModule {
}
