import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@app/guard/auth.guard";
import {MyCourseListComponent} from "./my-course-list/my-course-list.component";
import {MyCourseDetailsComponent} from "./my-course-details/my-course-details.component";

const routes: Routes = [
  {
    path: '/my/courses',
    component: MyCourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '/my/courses/course/info',
    component: MyCourseDetailsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCourseRoutingModule {
}
