import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "@app/shared/model/Lesson";
import {Chapter} from "@app/shared/model/Chapter";
import {UserToLesson} from "@app/shared/model/UserToLesson";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  chapterListUrl = '/api/chapters';
  chapterUrl = '/api/chapters/chapter';
  lessonListUrl = '/api/chapters/chapter/lessons';
  allUsersToLessonsListUrl = '/api/chapters/chapter/users';

  constructor(private http: HttpClient) {
  }

  getAllLessonsInChapter(chapterId: number): Observable<Lesson[]> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.get<Lesson[]>(this.lessonListUrl, {params: queryParams});
  }

  getAllUsersToLessonsInChapter(chapterId: number): Observable<UserToLesson[]> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.get<UserToLesson[]>(this.allUsersToLessonsListUrl, {params: queryParams});
  }

  getById(chapterId: number): Observable<Chapter> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.get<Chapter>(this.chapterUrl, {params: queryParams});
  }

  add(courseId: number, chapter: Chapter): Observable<Chapter> {
    const queryParams = new HttpParams().set('courseId', courseId);
    return this.http.post<Chapter>(this.chapterListUrl, chapter, {params: queryParams});
  }

  delete(chapterId: number): Observable<any> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.delete(this.chapterUrl, {params: queryParams});
  }

  update(chapterId: number, chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>(this.chapterUrl, chapter);
  }

}
