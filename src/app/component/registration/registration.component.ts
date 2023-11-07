import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SecurityService} from "@app/service/security/security.service";
import {first} from "rxjs";
import {SignUp} from "@app/shared/model/SignUp";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formSubmitted = false;
  error = '';

  credentials: SignUp = {
    login: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  // If user is already authenticated - it brings user to application root page.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: SecurityService) {
    if (this.authenticationService.userValue) {
      void this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  signUp(): void {
    this.formSubmitted = true;

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
