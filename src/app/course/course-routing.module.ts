import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";

const routes: Routes = [
  {path: 'course', component: CourseListComponent},
  {path: 'course/:courseId', component: CourseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
