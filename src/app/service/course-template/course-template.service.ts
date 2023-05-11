import {Injectable} from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  rootUrl = '/api/courses-templates';
  idUrl = '/api/courses-templates/:id';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CourseTemplate[]> {
    return this.http.get<CourseTemplate[]>(this.rootUrl);
  }

  getById(id: number): Observable<CourseTemplate> {
    let url = this.idUrl.replace(':id', id.toString());
    return this.http.get<CourseTemplate>(url);
  }

  add(template: CourseTemplate): Observable<CourseTemplate> {
    return this.http.post<CourseTemplate>(this.rootUrl, template);
  }

  delete(id: number): Observable<any> {
    let url = this.idUrl.replace(':id', id.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, courseTemplate: CourseTemplate): Observable<CourseTemplate> {
    let url = this.idUrl.replace(':id', courseTemplateId.toString());
    return this.http.put<CourseTemplate>(url, courseTemplate);
  }


}
