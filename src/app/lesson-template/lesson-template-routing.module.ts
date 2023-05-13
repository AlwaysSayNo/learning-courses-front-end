import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LessonTemplateListComponent} from "./lesson-template-list/lesson-template-list.component";
import {LessonTemplateDetailsComponent} from "./lesson-template-details/lesson-template-details.component";

const routes: Routes = [
  {
    path: 'course-templates/:courseTemplateId/chapter-templates/:chapterTemplateId/lesson-templates',
    component: LessonTemplateListComponent
  },
  {
    path: 'course-templates/:courseTemplateId/chapter-templates/:chapterTemplateId/lesson-templates/:lessonTemplateId',
    component: LessonTemplateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonTemplateRoutingModule {
}
