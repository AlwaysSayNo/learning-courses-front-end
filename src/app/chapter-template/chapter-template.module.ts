import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTemplateRoutingModule } from './chapter-template-routing.module';
import {ChapterTemplateListComponent} from "./chapter-template-list/chapter-template-list.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ChapterTemplateListComponent,
  ],
  exports: [
    ChapterTemplateListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChapterTemplateRoutingModule
  ]
})
export class ChapterTemplateModule { }
