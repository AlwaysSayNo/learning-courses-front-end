import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@app/guard/auth.guard";
import {MyLessonListComponent} from "./my-lesson-list/my-lesson-list.component";
import {MyLessonDetailsComponent} from "./my-lesson-details/my-lesson-details.component";

const routes: Routes = [
  {
    path: 'my/chapters/chapter/lessons',
    component: MyLessonListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my/lessons/lesson',
    component: MyLessonDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLessonRoutingModule {
}
