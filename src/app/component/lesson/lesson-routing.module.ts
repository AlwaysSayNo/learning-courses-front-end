import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonListComponent} from "./lesson-list/lesson-list.component";

const routes: Routes = [
  {path: 'course/:courseId/lesson', component: LessonListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
