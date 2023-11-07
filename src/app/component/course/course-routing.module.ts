import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {AuthGuard} from "@app/guard/auth.guard";

const routes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/course',
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
