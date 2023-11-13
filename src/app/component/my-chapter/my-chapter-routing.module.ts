import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@app/guard/auth.guard";
import {RoleType} from "@app/shared/enum/RoleType";
import {MyChapterListComponent} from "@app/component/my-chapter/my-chapter-list/my-chapter-list.component";
import {MyChapterDetailsComponent} from "@app/component/my-chapter/my-chapter-details/my-chapter-details.component";

const routes: Routes = [
  {
    path: 'my/courses/course/chapters',
    component: MyChapterListComponent,
    canActivate: [AuthGuard],
    data: {roles: [RoleType.INSTRUCTOR, RoleType.STUDENT, RoleType.ADMIN]}
  },
  {
    path: 'my/chapters/chapter',
    component: MyChapterDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [RoleType.INSTRUCTOR, RoleType.STUDENT, RoleType.ADMIN]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyChapterRoutingModule {
}
