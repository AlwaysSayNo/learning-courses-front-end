import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseTemplateListComponent} from "./course-template-list/course-template-list.component";
import {CourseTemplateDetailsComponent} from "./course-template-details/course-template-details.component";

const routes: Routes = [
  {path: 'course-templates', component: CourseTemplateListComponent},
  {path: 'course-templates/:courseTemplateId', component: CourseTemplateDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseTemplateRoutingModule {
}
