import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChapterTemplateRoutingModule} from './chapter-template-routing.module';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";
import {FormsModule} from "@angular/forms";
import {ChapterTemplateAddComponent} from './chapter-template-add/chapter-template-add.component';
import {ValidationDirectiveModule} from "../shared/directive/validation-directive.module";
import {ChapterTemplateDetailsComponent} from './chapter-template-details/chapter-template-details.component';
import {ChapterTemplateUpdateComponent} from './chapter-template-update/chapter-template-update.component';


@NgModule({
  declarations: [
    ChapterTemplateListComponent,
    ChapterTemplateAddComponent,
    ChapterTemplateDetailsComponent,
    ChapterTemplateUpdateComponent,
  ],
  exports: [
    ChapterTemplateListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChapterTemplateRoutingModule,
    ValidationDirectiveModule
  ]
})
export class ChapterTemplateModule {
}
