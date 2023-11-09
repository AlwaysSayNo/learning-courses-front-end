import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyChapterRoutingModule} from './my-chapter-routing.module';
import {MyChapterListComponent} from './my-chapter-list/my-chapter-list.component';
import { MyChapterDetailsComponent } from './my-chapter-details/my-chapter-details.component';


@NgModule({
  declarations: [
    MyChapterListComponent,
    MyChapterDetailsComponent
  ],
  imports: [
    CommonModule,
    MyChapterRoutingModule
  ]
})
export class MyChapterModule {
}
