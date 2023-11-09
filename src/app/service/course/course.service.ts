import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "@app/shared/model/Course";
import {Lesson} from "@app/shared/model/Lesson";
import {RoleType} from "@app/shared/enum/RoleType";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {UserToCourseInfo} from "@app/shared/model/UserToCourseInfo";
import {Chapter} from "@app/shared/model/Chapter";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseListUrl = '/api/courses';
  courseUrl = '/api/courses/course';
  allLessonsInCourseUrl = '/api/courses/course/lessons';
  allChaptersInCourseUrl = '/api/courses/course/chapters';
  lessonsUrl = '/api/courses/:courseId/lessons/:lessonId';
  finishCourseUrl = '/api/courses/course/finish';
  enrollWithoutApprovalUrl = '/api/courses/course/users/enrolls';
  usersUrl = '/api/courses/course/users/info';
  userCourseInfoUrl = '/api/courses/course/users/user/info';
  usersLessonsInfoUrl = '/api/courses/:courseId/lessons/:lessonId/users/:userId';

  constructor(private http: HttpClient) {
  }

  getAll(isActive: boolean): Observable<Course[]> {
    const queryParams = isActive ? {params: new HttpParams().set('isActive', isActive)} : {};
    return this.http.get<Course[]>(this.courseListUrl, queryParams);
  }

  getById(courseId: number): Observable<Course> {
    const queryParams = courseId ? {params: new HttpParams().set('courseId', courseId)} : {};
    return this.http.get<Course>(this.courseUrl, queryParams);
  }

  //TODO the same as UserToCourseService#getAllLessonsInCourse
  getAllLessonsInCourse(courseId: number): Observable<Lesson[]> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.get<Lesson[]>(this.allLessonsInCourseUrl, {params: queryParams});
  }

  getAllChaptersInCourse(courseId: number): Observable<Chapter[]> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.get<Chapter[]>(this.allChaptersInCourseUrl, {params: queryParams});
  }

/*  //TODO use id or refactor LessonController
  getLessonsInCourse(courseId: number, lessonId: number): Observable<Lesson> {
    let url = this.lessonsUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());
    return this.http.get<Lesson>(url);
  }*/

  delete(courseId: number): Observable<any> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.delete(this.courseUrl, {params: queryParams});
  }

  update(courseId: number, courseUpdate: Course): Observable<Course> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.put<Course>(this.courseUrl, courseUpdate, {params: queryParams});
  }

  finish(courseId: number): Observable<string> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.put<string>(this.finishCourseUrl, {}, {params: queryParams});
  }

  //TODO this is silly enroll - without approval. Change with sending requests to instructor and then approve it
  enrollWithoutApproval(courseId: number, userId: number): Observable<UserToCourse> {
    const queryParams = new HttpParams().set('courseId', courseId).set('userId', userId);
    return this.http.post<UserToCourse>(this.enrollWithoutApprovalUrl, {}, {params: queryParams});
  }

  getAllUserToCourseInfo(courseId: number, roleType: RoleType | undefined): Observable<UserToCourseInfo[]> {
    let queryParams = new HttpParams().set('courseId', courseId);
    if (roleType) queryParams.set('roleType', roleType)

    return this.http.get<UserToCourseInfo[]>(this.usersUrl, {params: queryParams});
  }

  getUserToCourseInfo(courseId: number, userId: number): Observable<UserToCourse> {
    const queryParams = new HttpParams().set('courseId', courseId).set('userId', userId);
    return this.http.get<UserToCourse>(this.userCourseInfoUrl, {params: queryParams});
  }

  updateUserToCourseInfo(courseId: number, userId: number, userToCourseUpdate: UserToCourse): Observable<UserToCourse> {
    const queryParams = new HttpParams().set('courseId', courseId).set('userId', userId);
    return this.http.put<UserToCourse>(this.userCourseInfoUrl, userToCourseUpdate, {params: queryParams});
  }

/*  getUserLessonInfo(courseId: number, lessonId: number, userId: number): Observable<UserToLesson> {
    let url = this.usersLessonsInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.get<UserToLesson>(url);
  }*/

/*  updateUsersLessonInfo(courseId: number, lessonId: number, userId: number,
                        userToLessonUpdate: UserToLesson): Observable<UserToLesson> {
    let url = this.usersLessonsInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());
    return this.http.put<UserToLesson>(url, userToLessonUpdate);
  }*/

  //TODO remove user, request for course logic,

}
