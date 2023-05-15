import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {SignIn} from "../shared/model/SignIn";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  error = '';

  credentials: SignIn = {
    login: '',
    password: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.userValue) {
      void this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    this.authenticationService.login(this.credentials.login, this.credentials.password)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          void this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.error = error;
        }
      });
  }

}
