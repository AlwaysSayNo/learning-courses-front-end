import {Injectable} from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../shared/model/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  rootUrl = '/api/courses-templates';
  idUrl = '/api/courses-templates/:courseTemplateId';
  createUrl = '/api/courses-templates/:courseTemplateId/create';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CourseTemplate[]> {
    return this.http.get<CourseTemplate[]>(this.rootUrl);
  }

  getById(courseTemplateId: number): Observable<CourseTemplate> {
    let url = this.idUrl.replace(PathVariable.courseTemplateId.toString(), courseTemplateId.toString());
    return this.http.get<CourseTemplate>(url);
  }

  add(template: CourseTemplate): Observable<CourseTemplate> {
    return this.http.post<CourseTemplate>(this.rootUrl, template);
  }

  delete(courseTemplateId: number): Observable<any> {
    let url = this.idUrl.replace(PathVariable.courseTemplateId.toString(), courseTemplateId.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, courseTemplate: CourseTemplate): Observable<CourseTemplate> {
    let url = this.idUrl.replace(PathVariable.courseTemplateId.toString(), courseTemplateId.toString());
    return this.http.put<CourseTemplate>(url, courseTemplate);
  }


  create(courseTemplateId: number): Observable<Course> {
    let url = this.createUrl.replace(PathVariable.courseTemplateId.toString(), courseTemplateId.toString());
    return this.http.post<Course>(url, {});
  }

}

enum PathVariable {

  courseTemplateId = ":courseTemplateId",

}
