import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseTemplateModule} from "./component/course-template/course-template.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CourseModule} from "./component/course/course.module";
import {ErrorInterceptor} from "./interceptor/error/error.interceptor";
import {JwtInterceptor} from "./interceptor/jwt/jwt.interceptor";
import {MyCourseModule} from "./component/my-course/my-course.module";
import {LoginComponent} from "./component/login/login.component";
import {RegistrationComponent} from './component/registration/registration.component';
import {AppNavComponent} from './component/app-nav/app-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AppNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CourseTemplateModule,
    CourseModule,
    MyCourseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
