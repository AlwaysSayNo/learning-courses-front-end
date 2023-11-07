import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {SignIn} from "@app/shared/model/SignIn";
import {SecurityService} from "@app/service/security/security.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  formSubmitted = false;
  error = '';

  credentials: SignIn = {
    login: '',
    password: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: SecurityService
  ) {
    if (this.authenticationService.userValue) {
      void this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  signIn() {
    this.formSubmitted = true;

    this.authenticationService.login(this.credentials.login, this.credentials.password)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          void this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.error = error;
        }
      });
  }

}
