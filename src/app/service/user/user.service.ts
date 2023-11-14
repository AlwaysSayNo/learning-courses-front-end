import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "@app/shared/model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userListUrl = '/api/users';
  userUrl = '/api/users/user';

  constructor(private http: HttpClient) { }

  getById(userId: number): Observable<User> {
    let queryParams = new HttpParams().set('userId', userId);
    return this.http.get<User>(this.userUrl, {params: queryParams});
  }

  getAllUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.userListUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userListUrl, user);
  }

  deleteUser(userId: number): Observable<User[]> {
    let queryParams = new HttpParams().set('userId', userId);
    return this.http.delete<User[]>(this.userUrl, {params: queryParams});
  }

  updateUser(userId: number, user: User): Observable<User[]> {
    let queryParams = new HttpParams().set('userId', userId);
    return this.http.put<User[]>(this.userUrl, user, {params: queryParams});
  }

}
