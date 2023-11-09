import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterTemplate} from "@app/shared/model/ChapterTemplate";
import {LessonTemplate} from "@app/shared/model/LessonTemplate";

@Injectable({
  providedIn: 'root'
})
export class ChapterTemplateService {

  chapterTemplateListUrl = '/api/templates/chapters';
  chapterTemplateUrl = '/api/templates/chapters/chapter';
  lessonTemplateListUrl = '/api/templates/chapters/chapter/lessons';

  constructor(private http: HttpClient) {
  }

  getAllLessonsInChapterTemplate(chapterTemplateId: number): Observable<LessonTemplate[]> {
    const queryParams = new HttpParams().set('chapterTemplateId', chapterTemplateId);
    return this.http.get<LessonTemplate[]>(this.lessonTemplateListUrl, {params: queryParams});
  }

  getById(chapterTemplateId: number): Observable<ChapterTemplate> {
    const queryParams = new HttpParams().set('chapterTemplateId', chapterTemplateId);
    return this.http.get<ChapterTemplate>(this.chapterTemplateUrl, {params: queryParams});
  }

  add(courseTemplateId: number, template: ChapterTemplate): Observable<ChapterTemplate> {
    const queryParams = new HttpParams().set('courseTemplateId', courseTemplateId);
    return this.http.post<ChapterTemplate>(this.chapterTemplateListUrl, template, {params: queryParams});
  }

  delete(chapterTemplateId: number): Observable<any> {
    const queryParams = new HttpParams().set('chapterTemplateId', chapterTemplateId);
    return this.http.delete(this.chapterTemplateUrl, {params: queryParams});
  }

  update(chapterTemplateId: number, chapterTemplate: ChapterTemplate): Observable<ChapterTemplate> {
    return this.http.put<ChapterTemplate>(this.chapterTemplateUrl, chapterTemplate);
  }

}
