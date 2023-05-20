import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../../shared/model/UserInfo";
import {User} from "../../shared/model/User";
import {SignUp} from "../../shared/model/SignUp";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private USER = 'user';
  private signInUrl = '/api/sign-in';
  private signUpUrl = '/api/sign-up';

  userSubject!: BehaviorSubject<UserInfo>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    const subj = localStorage.getItem(this.USER);
    // @ts-ignore
    this.userSubject = new BehaviorSubject<UserInfo>(null);

    if (subj) {
      this.userSubject.next(JSON.parse(subj));
    }
  }

  public get userValue(): UserInfo {
    return this.userSubject?.value;
  }

  login(login: string, password: string): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.signInUrl, { login, password })
      .pipe(map(user => {
        localStorage.setItem(this.USER, JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  registration(signUp: SignUp): Observable<User> {
    return this.http.post<User>(this.signUpUrl, signUp);
  }

  logout() {
    localStorage.removeItem(this.USER);
    // @ts-ignore
    this.userSubject.next(null);
    void this.router.navigate(['/login']);
  }
}
