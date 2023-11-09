import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@app/guard/auth.guard";
import {MyCourseListComponent} from "./my-course-list/my-course-list.component";
import {MyCourseDetailsComponent} from "./my-course-details/my-course-details.component";
import {RoleType} from "@app/shared/enum/RoleType";

const routes: Routes = [
  {
    path: 'my/courses',
    component: MyCourseListComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.STUDENT] }
  },
  {
    path: 'my/courses/course/info',
    component: MyCourseDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.STUDENT] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCourseRoutingModule {
}
