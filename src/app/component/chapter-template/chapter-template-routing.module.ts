import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";
import {ChapterTemplateDetailsComponent} from "./chapter-template-details/chapter-template-details.component";
import {RoleType} from "@app/shared/enum/RoleType";
import {AuthGuard} from "@app/guard/auth.guard";

const routes: Routes = [
  {
    path: 'templates/courses/course/chapters',
    component: ChapterTemplateListComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
  {
    path: 'templates/chapters/chapter',
    component: ChapterTemplateDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterTemplateRoutingModule {
}
