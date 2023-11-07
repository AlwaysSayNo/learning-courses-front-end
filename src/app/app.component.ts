import {Component} from '@angular/core';
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authenticationService: SecurityService) {
  }

  logout(): void {
    this.authenticationService.logout();
  }

  get user(): UserInfo {
    return this.authenticationService.userValue;
  }
}
