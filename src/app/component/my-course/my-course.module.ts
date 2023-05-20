import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyCourseRoutingModule} from './my-course-routing.module';
import {MyCourseListComponent} from './my-course-list/my-course-list.component';
import {MyCourseDetailsComponent} from './my-course-details/my-course-details.component';
import {UserModule} from "../user/user.module";
import {MyLessonModule} from "../my-lesson/my-lesson.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    MyCourseListComponent,
    MyCourseDetailsComponent
  ],
  imports: [
    CommonModule,
    MyCourseRoutingModule,
    UserModule,
    MyLessonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MyCourseModule {
}
