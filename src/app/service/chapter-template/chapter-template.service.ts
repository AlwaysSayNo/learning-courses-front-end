import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";

@Injectable({
  providedIn: 'root'
})
export class ChapterTemplateService {

  rootUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/';
  idUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/:id';


  constructor(private http: HttpClient) {
  }

  getAllInCourse(courseTemplateId: number): Observable<ChapterTemplate[]> {
    let url = this.rootUrl.replace(':courseTemplateId', courseTemplateId.toString());
    return this.http.get<ChapterTemplate[]>(url);
  }

  getById(courseTemplateId: number, id: number): Observable<ChapterTemplate> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':id', id.toString());
    return this.http.get<ChapterTemplate>(url);
  }

  add(courseTemplateId: number, template: ChapterTemplate): Observable<ChapterTemplate> {
    let url = this.rootUrl.replace(':courseTemplateId', courseTemplateId.toString());
    return this.http.post<ChapterTemplate>(url, template);
  }

  delete(courseTemplateId: number, id: number): Observable<any> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':id', id.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, id: number, chapterTemplate: ChapterTemplate): Observable<ChapterTemplate> {
    let url = this.idUrl
      .replace(':courseTemplateId', courseTemplateId.toString())
      .replace(':id', id.toString());
    return this.http.put<ChapterTemplate>(url, chapterTemplate);
  }

}
