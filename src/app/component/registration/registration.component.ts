import { Component, OnInit } from '@angular/core';
import {SignIn} from "../../shared/model/SignIn";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {catchError, first} from "rxjs";
import {SignUp} from "../../shared/model/SignUp";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  submitted = false;
  error = '';

  credentials: SignUp = {
    login: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    if (this.authenticationService.userValue) {
      void this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    this.authenticationService.registration(this.credentials)
      .pipe(first())
      .subscribe({
        next: () => {
          void this.router.navigateByUrl('login');
        },
        error: (error) => {
          //TODO try to get response error body
          console.log(error)
          this.error = `User with login ${this.credentials.login} already exists`;
        }
      });
  }

}
