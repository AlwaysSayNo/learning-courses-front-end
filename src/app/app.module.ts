import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseTemplateModule} from "./course-template/course-template.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CourseModule} from "./course/course.module";
import {LoginComponent} from './login/login.component';
import {ErrorInterceptor} from "./interceptor/error/error.interceptor";
import {JwtInterceptor} from "./interceptor/jwt/jwt.interceptor";
import {MyCourseModule} from "./my-course/my-course.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CourseTemplateModule,
    CourseModule,
    MyCourseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
