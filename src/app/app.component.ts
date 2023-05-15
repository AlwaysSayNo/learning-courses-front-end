import {Component} from '@angular/core';
import {AuthenticationService} from "./service/authentication/authentication.service";
import {UserInfo} from "./shared/model/UserInfo";

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

  user(): UserInfo {
    return this.authenticationService.userValue;
  }
}
