import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../shared/model/Course";
import {Lesson} from "../../shared/model/Lesson";
import {RoleType} from "../../shared/enum/RoleType";
import {UserToCourse} from "../../shared/model/UserToCourse";
import {UserToLesson} from "../../shared/model/UserToLesson";
import {UserToCourseInfo} from "../../shared/model/UserToCourseInfo";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  rootUrl = '/api/courses';
  idUrl = '/api/courses/:courseId';
  allLessonsUrl = '/api/courses/:courseId/lessons';
  lessonsUrl = '/api/courses/:courseId/lessons/:lessonId';
  finishUrl = '/api/courses/:courseId/finish';
  enrollUrl = '/api/courses/:courseId/enroll';
  usersUrl = '/api/courses/:courseId/users';
  userCourseInfoUrl = '/api/courses/:courseId/users/:userId';
  usersLessonsInfoUrl = '/api/courses/:courseId/lessons/:lessonId/users/:userId';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.rootUrl);
  }

  getById(courseId: number): Observable<Course> {
    let url = this.idUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.get<Course>(url);
  }

  //TODO the same as UserToCourseService#getAllLessonsInCourse
  getAllLessonsInCourse(courseId: number): Observable<Lesson[]> {
    let url = this.allLessonsUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.get<Lesson[]>(url);
  }

  //TODO use id or refactor LessonController
  getLessonsInCourse(courseId: number, lessonId: number): Observable<Lesson> {
    let url = this.lessonsUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());
    return this.http.get<Lesson>(url);
  }

  delete(courseId: number): Observable<any> {
    let url = this.idUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.delete(url);
  }

  update(courseId: number, courseUpdate: Course): Observable<Course> {
    let url = this.idUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.put<Course>(url, courseUpdate);
  }

  finish(courseId: number): Observable<string> {
    let url = this.finishUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.put<string>(url, {});
  }

  enroll(courseId: number): Observable<UserToCourse> {
    let url = this.enrollUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    return this.http.post<UserToCourse>(url, {});
  }

  getAllUserToCourseInfo(courseId: number, roleType: RoleType | undefined): Observable<UserToCourseInfo[]> {
    let url = this.usersUrl.replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString());
    const options = roleType ?
      {params: new HttpParams().set('roleType', roleType.toString())} : {};

    return this.http.get<UserToCourseInfo[]>(url, options);
  }

  getUsersCourseInfo(courseId: number, userId: number): Observable<UserToCourse> {
    let url = this.userCourseInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.get<UserToCourse>(url);
  }

  updateUsersCourseInfo(courseId: number, userId: number, userToCourseUpdate: UserToCourse): Observable<UserToCourse> {
    let url = this.userCourseInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.put<UserToCourse>(url, userToCourseUpdate);
  }

  getUserLessonInfo(courseId: number, lessonId: number, userId: number): Observable<UserToLesson> {
    let url = this.usersLessonsInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.get<UserToLesson>(url);
  }

  updateUsersLessonInfo(courseId: number, lessonId: number, userId: number,
                        userToLessonUpdate: UserToLesson): Observable<UserToLesson> {
    let url = this.usersLessonsInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.put<UserToLesson>(url, userToLessonUpdate);
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  LESSON_ID = ":lessonId",
  USER_ID = ":userId",

}
