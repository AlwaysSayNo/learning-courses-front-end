import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseTemplateListComponent} from "./course-template/course-template-list/course-template-list.component";
import {CourseTemplateDetailsComponent} from "./course-template/course-template-details/course-template-details.component";

const routes: Routes = [
  {path: 'course-templates', component: CourseTemplateListComponent},
  {path: 'course-templates/:courseTemplateId', component: CourseTemplateDetailsComponent},
  {path: '', redirectTo: 'course-templates', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
