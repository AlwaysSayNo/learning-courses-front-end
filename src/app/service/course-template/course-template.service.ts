import {Injectable} from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";
import {removeIf} from "../../utility/array-utility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  templates!: CourseTemplate[];
  rootUrl = '/api/courses-templates'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CourseTemplate[]> {
    return this.http.get<CourseTemplate[]>(this.rootUrl);
  }

  getById(id: number): Observable<CourseTemplate> {
    return this.http.get<CourseTemplate>(this.rootUrl + `/${id}`);
  }

  add(template: CourseTemplate): CourseTemplate {
    template.id = this.templates.push(template);
    return template;
  }

  delete(id: number): void {
    this.templates = removeIf(this.templates, (t) => t.id == id);
  }

  update(courseTemplate: CourseTemplate): CourseTemplate {
    this.templates[courseTemplate.id - 1] = courseTemplate;
    return courseTemplate;
  }


}
