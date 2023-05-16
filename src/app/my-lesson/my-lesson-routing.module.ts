import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../guard/auth.guard";
import {MyLessonListComponent} from "./my-lesson-list/my-lesson-list.component";
import {MyLessonDetailsComponent} from "./my-lesson-details/my-lesson-details.component";

const routes: Routes = [
  {
    path: 'user/my-courses/:courseId/lessons',
    component: MyLessonListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/my-courses/:courseId/lessons/:lessonId',
    component: MyLessonDetailsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLessonRoutingModule {
}
