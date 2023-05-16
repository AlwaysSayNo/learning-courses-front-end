import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseTemplateListComponent} from "./course-template-list/course-template-list.component";
import {CourseTemplateDetailsComponent} from "./course-template-details/course-template-details.component";
import {AuthGuard} from "../../guard/auth.guard";
import {RoleType} from "../../shared/enum/RoleType";

const routes: Routes = [
  {
    path: 'course-templates',
    component: CourseTemplateListComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
  {
    path: 'course-templates/:courseTemplateId',
    component: CourseTemplateDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseTemplateRoutingModule {
}
