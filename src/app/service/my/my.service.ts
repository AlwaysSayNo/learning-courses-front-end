import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "@app/shared/model/Lesson";
import {Chapter} from "@app/shared/model/Chapter";
import {Course} from "@app/shared/model/Course";
import {UserToCourse} from "@app/shared/model/UserToCourse";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private myCourseListUrl = '/api/my/courses';
  private myCourseUrl = '/api/my/courses/course';
  private myLessonListInChapterUrl = '/api/my/chapters/chapter/lessons';
  private myLessonUrl = '/api/my/lessons/lesson';

  constructor(private http: HttpClient) {
  }

  getAllMyLessonsInChapter(chapterId: number): Observable<Lesson[]> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.get<Lesson[]>(this.myLessonListInChapterUrl, {params: queryParams});
  }

  getMyLessonByLessonId(lessonId: number): Observable<Chapter> {
    const queryParams = new HttpParams().set('lessonId', lessonId);
    return this.http.get<Chapter>(this.myLessonUrl, {params: queryParams});
  }

  getAllMyCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.myCourseListUrl);
  }

  getMyCourseByCourseId(courseId: number): Observable<UserToCourse> {
    let queryParams = new HttpParams().set('courseId', courseId);
    return this.http.get<UserToCourse>(this.myCourseUrl, {params: queryParams});
  }

}
