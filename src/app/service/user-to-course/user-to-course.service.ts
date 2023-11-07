import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "@app/shared/model/Course";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {UserToLesson} from "@app/shared/model/UserToLesson";

@Injectable({
  providedIn: 'root'
})
export class UserToCourseService {

  myCoursesUrl = '/api/my/courses';
  myCourseUrl = '/api/my/courses/course/info';
  userToLessonsUrl = '/api/my-courses/:courseId/lessons';
  userToLessonInfoUrl = '/api/my-courses/:courseId/lessons/:lessonId/info';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.myCoursesUrl);
  }

  getById(courseId: number): Observable<UserToCourse> {
    let queryParams = new HttpParams().set('courseId', courseId);
    return this.http.get<UserToCourse>(this.myCourseUrl, {params: queryParams});
  }

  getAllUserToLessonsInCourse(courseId: number): Observable<UserToLesson[]> {
    let url = this.userToLessonsUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.get<UserToLesson[]>(url);
  }

  //TODO check course.service#getUserLessonInfo
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
