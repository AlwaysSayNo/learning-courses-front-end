import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonTemplateRoutingModule} from './lesson-template-routing.module';
import {FormsModule} from "@angular/forms";
import {ValidationDirectiveModule} from "../../shared/directive/validation-directive.module";
import { LessonTemplateListComponent } from './lesson-template-list/lesson-template-list.component';
import { LessonTemplateAddComponent } from './lesson-template-add/lesson-template-add.component';
import { LessonTemplateDetailsComponent } from './lesson-template-details/lesson-template-details.component';
import { LessonTemplateUpdateComponent } from './lesson-template-update/lesson-template-update.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LessonTemplateListComponent,
    LessonTemplateAddComponent,
    LessonTemplateDetailsComponent,
    LessonTemplateUpdateComponent
  ],
  imports: [
    CommonModule,
    LessonTemplateRoutingModule,
    FormsModule,
    ValidationDirectiveModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LessonTemplateModule {
}
