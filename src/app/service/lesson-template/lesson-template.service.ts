import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {LessonTemplate} from "@app/shared/model/LessonTemplate";

@Injectable({
  providedIn: 'root'
})
export class LessonTemplateService {

  private lessonTemplateListUrl = '/api/templates/chapters/chapter/lessons';
  private lessonTemplateUrl = '/api/templates/lessons/lesson';

  constructor(private http: HttpClient) {
  }

  getById(lessonTemplateId: number): Observable<LessonTemplate> {
    const queryParams = new HttpParams().set('lessonTemplateId', lessonTemplateId);
    return this.http.get<LessonTemplate>(this.lessonTemplateUrl, {params: queryParams});
  }

  add(chapterTemplateId: number, template: LessonTemplate): Observable<LessonTemplate> {
    const queryParams = new HttpParams().set('chapterTemplateId', chapterTemplateId);
    return this.http.post<LessonTemplate>(this.lessonTemplateListUrl, template, {params: queryParams});
  }

  delete(lessonTemplateId: number): Observable<any> {
    const queryParams = new HttpParams().set('lessonTemplateId', lessonTemplateId);
    return this.http.delete(this.lessonTemplateUrl, {params: queryParams});
  }

  update(lessonTemplateId: number, template: LessonTemplate): Observable<LessonTemplate> {
    const queryParams = new HttpParams().set('lessonTemplateId', lessonTemplateId);
    return this.http.put<LessonTemplate>(this.lessonTemplateUrl, template, {params: queryParams});
  }

}
