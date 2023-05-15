import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";

@Injectable({
  providedIn: 'root'
})
export class ChapterTemplateService {

  rootUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/';
  idUrl = '/api/courses-templates/:courseTemplateId/chapters-templates/:chapterTemplateId';


  constructor(private http: HttpClient) {
  }

  getAllInCourse(courseTemplateId: number): Observable<ChapterTemplate[]> {
    let url = this.rootUrl.replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString());
    return this.http.get<ChapterTemplate[]>(url);
  }

  getById(courseTemplateId: number, id: number): Observable<ChapterTemplate> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), id.toString());
    return this.http.get<ChapterTemplate>(url);
  }

  add(courseTemplateId: number, template: ChapterTemplate): Observable<ChapterTemplate> {
    let url = this.rootUrl.replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString());
    return this.http.post<ChapterTemplate>(url, template);
  }

  //TODO make the binding between service and paths smaller. the expected result is to allocate pathArgs to some constant equal to path and service
  delete(courseTemplateId: number, id: number): Observable<any> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), id.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, id: number, chapterTemplate: ChapterTemplate): Observable<ChapterTemplate> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), id.toString());
    return this.http.put<ChapterTemplate>(url, chapterTemplate);
  }

}

enum TemplatePathVariable {

  COURSE_TEMPLATE_ID = ":courseTemplateId",
  CHAPTER_TEMPLATE_ID = ":chapterTemplateId",

}
