import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LessonTemplate} from "../../shared/model/LessonTemplate";

@Injectable({
  providedIn: 'root'
})
export class LessonTemplateService {

  rootUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/:chapterTemplateId/lessons-templates';
  idUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/:chapterTemplateId/lessons-templates/:lessonTemplateId';

  constructor(private http: HttpClient) {
  }

  getAllInChapter(courseTemplateId: number, chapterTemplateId: number): Observable<LessonTemplate[]> {
    let url = this.rootUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':chapterTemplateId', chapterTemplateId.toString());
    return this.http.get<LessonTemplate[]>(url);
  }

  getById(courseTemplateId: number, chapterTemplateId: number, id: number): Observable<LessonTemplate> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':chapterTemplateId', chapterTemplateId.toString())
      .replace(':lessonTemplateId', id.toString());
    return this.http.get<LessonTemplate>(url);
  }

  add(courseTemplateId: number, chapterTemplateId: number, template: LessonTemplate): Observable<LessonTemplate> {
    let url = this.rootUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':chapterTemplateId', chapterTemplateId.toString());
    return this.http.post<LessonTemplate>(url, template);
  }

  delete(courseTemplateId: number, chapterTemplateId: number, id: number): Observable<any> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':chapterTemplateId', chapterTemplateId.toString())
      .replace(':lessonTemplateId', id.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, chapterTemplateId: number, id: number, template: LessonTemplate): Observable<LessonTemplate> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':chapterTemplateId', chapterTemplateId.toString())
      .replace(':lessonTemplateId', id.toString());
    return this.http.put<LessonTemplate>(url, template);
  }

}
