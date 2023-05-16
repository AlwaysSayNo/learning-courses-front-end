import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyLessonRoutingModule} from './my-lesson-routing.module';
import {MyLessonListComponent} from './my-lesson-list/my-lesson-list.component';
import {MyLessonDetailsComponent} from './my-lesson-details/my-lesson-details.component';


@NgModule({
  declarations: [
    MyLessonListComponent,
    MyLessonDetailsComponent
  ],
  imports: [
    CommonModule,
    MyLessonRoutingModule
  ]
})
export class MyLessonModule {
}
