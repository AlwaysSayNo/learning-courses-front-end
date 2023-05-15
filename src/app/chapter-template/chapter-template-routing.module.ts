import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";
import {ChapterTemplateDetailsComponent} from "./chapter-template-details/chapter-template-details.component";
import {RoleType} from "../shared/enum/RoleType";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
  {
    path: 'course-templates/:courseTemplateId/chapter-templates',
    component: ChapterTemplateListComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleType.INSTRUCTOR, RoleType.ADMIN] }
  },
  {
    path: 'course-templates/:courseTemplateId/chapter-templates/:chapterTemplateId',
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
