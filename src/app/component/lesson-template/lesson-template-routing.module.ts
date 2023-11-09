import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonTemplateListComponent} from "./lesson-template-list/lesson-template-list.component";
import {LessonTemplateDetailsComponent} from "./lesson-template-details/lesson-template-details.component";
import {RoleType} from "@app/shared/enum/RoleType";
import {AuthGuard} from "@app/guard/auth.guard";

const routes: Routes = [
  {
    path: 'templates/chapters/chapter/lessons',
    component: LessonTemplateListComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
  {
    path: 'templates/lessons/lesson',
    component: LessonTemplateDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonTemplateRoutingModule {
}
