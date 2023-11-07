import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "@environments/environment";
import {SecurityService} from "@app/service/security/security.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: SecurityService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.authenticationService.userValue;

    const isLoggedIn = user && user.token !== undefined && user.token !== null;
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${user.token}`}
      });
    }

    return next.handle(request);
  }

}
