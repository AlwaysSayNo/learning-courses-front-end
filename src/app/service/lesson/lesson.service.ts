import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "@app/shared/model/Lesson";
import {UserToLesson} from "@app/shared/model/UserToLesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonUrl = '/api/lessons/lesson';
  private usersLessonUrl = '/api/lessons/lesson/users/user';
  private finishUrl = '/api/lessons/finish';

  constructor(private http: HttpClient) {
  }

  getById(lessonId: number): Observable<Lesson> {
    let queryParams = new HttpParams().set('lessonId', lessonId)
    return this.http.get<Lesson>(this.lessonUrl, {params: queryParams});
  }

  getUsersLessonInfo(lessonId: number, userId: number): Observable<UserToLesson> {
    let queryParams = new HttpParams().set('lessonId', lessonId).set('userId', userId);
    return this.http.get<UserToLesson>(this.usersLessonUrl, {params: queryParams});
  }

  finishLesson(lessonId: number): Observable<any> {
    let queryParams = new HttpParams().set('lessonId', lessonId)
    return this.http.put<string>(this.finishUrl, {}, {params: queryParams});
  }

}
