import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../shared/model/Course";
import {UserToCourse} from "../../shared/model/UserToCourse";
import {UserToLesson} from "../../shared/model/UserToLesson";

@Injectable({
  providedIn: 'root'
})
export class UserToCourseService {

  rootUrl = '/api/user/my-courses';
  idUrl = '/api/user/my-courses/:courseId/info';
  userToLessonsUrl = '/api/user/my-courses/:courseId/lessons';
  userToLessonInfoUrl = '/api/user/my-courses/:courseId/lessons/:lessonId/info';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.rootUrl);
  }

  getById(courseId: number): Observable<UserToCourse> {
    let url = this.idUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.get<UserToCourse>(url);
  }

  getAllUserToLessonsInCourse(courseId: number): Observable<UserToLesson[]> {
    let url = this.userToLessonsUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.get<UserToLesson[]>(url);
  }

  geUserToLessonInfo(courseId: number, lessonId: number): Observable<UserToLesson> {
    let url = this.userToLessonInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());
    return this.http.get<UserToLesson>(url);
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  LESSON_ID = ":lessonId",

}
