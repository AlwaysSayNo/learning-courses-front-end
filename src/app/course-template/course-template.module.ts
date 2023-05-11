import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseTemplateRoutingModule} from './course-template-routing.module';
import {CourseTemplateListComponent} from "./course-template-list/course-template-list.component";
import {CourseTemplateDetailsComponent} from "./course-template-details/course-template-details.component";
import {CourseTemplateAddComponent} from "./course-template-add/course-template-add.component";
import {CourseTemplateUpdateComponent} from "./course-template-update/course-template-update.component";
import {FormsModule} from "@angular/forms";
import {ChapterTemplateModule} from "../chapter-template/chapter-template.module";
import {ValidationDirectiveModule} from "../shared/directive/validation-directive.module";


@NgModule({
  declarations: [
    CourseTemplateListComponent,
    CourseTemplateDetailsComponent,
    CourseTemplateAddComponent,
    CourseTemplateUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseTemplateRoutingModule,
    ChapterTemplateModule,
    ValidationDirectiveModule
  ]
})
export class CourseTemplateModule {
}
