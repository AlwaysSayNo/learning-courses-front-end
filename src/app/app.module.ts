import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseTemplateListComponent} from './course-template/course-template-list/course-template-list.component';
import {CourseTemplateDetailsComponent} from './course-template/course-template-details/course-template-details.component';
import {FormsModule} from "@angular/forms";
import {CourseTemplateAddComponent} from './course-template/course-template-add/course-template-add.component';
import {CourseTemplateUpdateComponent} from './course-template/course-template-update/course-template-update.component';
import {CourseTitleLengthDirective} from './shared/directive/course-title-length/course-title-length.directive';
import {
  CourseDescriptionLengthDirective
} from './shared/directive/course-description-length/course-description-length.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseTemplateListComponent,
    CourseTemplateDetailsComponent,
    CourseTemplateAddComponent,
    CourseTemplateUpdateComponent,
    CourseTitleLengthDirective,
    CourseDescriptionLengthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
