import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "@app/shared/model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '/api/users/user';

  constructor(private http: HttpClient) { }

  getById(userId: number): Observable<User> {
    let queryParams = new HttpParams().set('userId', userId)
    return this.http.get<User>(this.userUrl, {params: queryParams});
  }

}
