import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "@app/shared/model/Lesson";
import {Chapter} from "@app/shared/model/Chapter";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  chapterListUrl = '/api/chapters';
  chapterUrl = '/api/chapters/chapter';
  lessonListUrl = '/api/chapters/chapter/lessons';

  constructor(private http: HttpClient) {
  }

  getAllLessonsInChapter(chapterId: number): Observable<Lesson[]> {
    const queryParams = new HttpParams().set('chapterId', chapterId);
    return this.http.get<Lesson[]>(this.lessonListUrl, {params: queryParams});
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
