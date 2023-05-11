import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseTemplateRoutingModule } from './course-template-routing.module';
import {CourseTemplateListComponent} from "./course-template-list/course-template-list.component";
import {CourseTemplateDetailsComponent} from "./course-template-details/course-template-details.component";
import {CourseTemplateAddComponent} from "./course-template-add/course-template-add.component";
import {CourseTemplateUpdateComponent} from "./course-template-update/course-template-update.component";
import {CourseTitleLengthDirective} from "../shared/directive/course-title-length/course-title-length.directive";
import {
  CourseDescriptionLengthDirective
} from "../shared/directive/course-description-length/course-description-length.directive";
import {FormsModule} from "@angular/forms";
import {ChapterTemplateModule} from "../chapter-template/chapter-template.module";


@NgModule({
  declarations: [
    CourseTemplateListComponent,
    CourseTemplateDetailsComponent,
    CourseTemplateAddComponent,
    CourseTemplateUpdateComponent,
    CourseTitleLengthDirective,
    CourseDescriptionLengthDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseTemplateRoutingModule,
    ChapterTemplateModule
  ]
})
export class CourseTemplateModule { }
