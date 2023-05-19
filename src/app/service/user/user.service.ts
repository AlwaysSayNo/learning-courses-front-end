import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../shared/model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  idUrl = '/api/users/:userId';

  constructor(private http: HttpClient) { }

  getById(userId: number): Observable<User> {
    let url = this.idUrl.replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.get<User>(url);
  }

}

enum TemplatePathVariable {

  USER_ID = ":userId",

}
