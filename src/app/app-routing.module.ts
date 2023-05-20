import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";
import {LoginComponent} from "./component/login/login.component";
import {RegistrationComponent} from "./component/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
