import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
