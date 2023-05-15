import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../shared/model/Course";
import {UserToCourse} from "../../shared/model/UserToCourse";

@Injectable({
  providedIn: 'root'
})
export class UserToCourseService {

  rootUrl = '/api/user/my-courses';
  idUrl = '/api/user/my-courses/:courseId/info';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.rootUrl);
  }

  getById(courseId: number): Observable<UserToCourse> {
    let url = this.idUrl.replace(PathVariable.courseId.toString(), courseId.toString());
    return this.http.get<UserToCourse>(url);
  }

}

enum PathVariable {

  courseId = ":courseId",
  lessonId = ":lessonId",

}
