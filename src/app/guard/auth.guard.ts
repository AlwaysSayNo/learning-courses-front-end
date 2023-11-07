import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SecurityService} from "../service/security/security.service";
import {environment} from "@environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: SecurityService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!environment.production) {
      return true;
    }

    const user = this.authenticationService.userValue;

    if (user) {
      // unauthorized (no appropriate role)
      if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
        void this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not signed-in so redirect to login page with the return url
    void this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
