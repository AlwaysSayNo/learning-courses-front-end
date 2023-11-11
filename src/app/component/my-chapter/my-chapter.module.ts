import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyChapterRoutingModule} from './my-chapter-routing.module';
import {MyChapterListComponent} from './my-chapter-list/my-chapter-list.component';
import { MyChapterDetailsComponent } from './my-chapter-details/my-chapter-details.component';
import {MyLessonModule} from "@app/component/my-lesson/my-lesson.module";


@NgModule({
  declarations: [
    MyChapterListComponent,
    MyChapterDetailsComponent
  ],
  imports: [
    CommonModule,
    MyLessonModule,
    MyChapterRoutingModule
  ]
})
export class MyChapterModule {
}
