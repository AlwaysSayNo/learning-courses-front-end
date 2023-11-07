import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "@app/shared/model/UserInfo";
import {User} from "@app/shared/model/User";
import {SignUp} from "@app/shared/model/SignUp";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private USER = 'user';
  private signInUrl = '/api/sign-in';
  private signUpUrl = '/api/sign-up';

  userSubject!: BehaviorSubject<UserInfo>;

  // If user was already authenticated (has user in its localStorage) it takes user's data from localStorage
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    const subj = localStorage.getItem(this.USER);
    let userValue = null;
    if (subj) {
      userValue = JSON.parse(subj);
    }

    this.userSubject = new BehaviorSubject<UserInfo>(userValue);
  }

  public get userValue(): UserInfo {
    return this.userSubject?.value;
  }

  public login(login: string, password: string): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.signInUrl, {login, password})
      .pipe(map(user => {
        localStorage.setItem(this.USER, JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  public registration(signUp: SignUp): Observable<User> {
    return this.http.post<User>(this.signUpUrl, signUp);
  }

  public logout() {
    localStorage.removeItem(this.USER);
    // @ts-ignore
    this.userSubject.next(null);
    void this.router.navigate(['/sign-in']);
  }
}
