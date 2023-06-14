import {Component} from '@angular/core';
import {AuthenticationService} from "@app/service/authentication/authentication.service";
import {UserInfo} from "@app/shared/model/UserInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  logout(): void {
    this.authenticationService.logout();
  }

  get user(): UserInfo {
    return this.authenticationService.userValue;
  }
}
