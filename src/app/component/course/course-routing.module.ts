import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: 'course',
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/:courseId',
    component: CourseDetailsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {
}
