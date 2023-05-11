import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";

const routes: Routes = [
  {path: 'course-templates/:courseTemplateId/chapter-templates', component: ChapterTemplateListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterTemplateRoutingModule { }
