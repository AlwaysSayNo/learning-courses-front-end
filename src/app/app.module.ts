import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTemplateListComponent } from './course-template-list/course-template-list.component';
import { CourseTemplateDetailsComponent } from './course-template-details/course-template-details.component';
import {FormsModule} from "@angular/forms";
import { CourseTemplateAddComponent } from './course-template-add/course-template-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTemplateListComponent,
    CourseTemplateDetailsComponent,
    CourseTemplateAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
