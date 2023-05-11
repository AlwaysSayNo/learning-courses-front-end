import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";
import {ChapterTemplateDetailsComponent} from "./chapter-template-details/chapter-template-details.component";

const routes: Routes = [
  {path: 'course-templates/:courseTemplateId/chapter-templates', component: ChapterTemplateListComponent},
  {
    path: 'course-templates/:courseTemplateId/chapter-templates/:chapterTemplateId',
    component: ChapterTemplateDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterTemplateRoutingModule {
}
