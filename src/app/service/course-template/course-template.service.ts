import {Injectable} from '@angular/core';
import {CourseTemplate} from "@app/shared/model/CourseTemplate";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "@app/shared/model/Course";
import {ChapterTemplate} from "@app/shared/model/ChapterTemplate";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  private courseTemplateListUrl = '/api/templates/courses';
  private courseTemplateUrl = '/api/templates/courses/course';
  private courseTemplateCreateUrl = '/api/templates/courses/course/create-instance';
  private allChapterInCourseTemplateUrl = '/api/templates/courses/course/chapters'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CourseTemplate[]> {
    return this.http.get<CourseTemplate[]>(this.courseTemplateListUrl);
  }

  getAllChaptersInCourseTemplate(courseTemplateId: number): Observable<ChapterTemplate[]> {
    const queryParams = new HttpParams().set('courseTemplateId', courseTemplateId);
    return this.http.get<ChapterTemplate[]>(this.allChapterInCourseTemplateUrl, {params: queryParams});
  }

  getById(courseTemplateId: number): Observable<CourseTemplate> {
    let queryParams = new HttpParams().set('courseTemplateId', courseTemplateId)
    return this.http.get<CourseTemplate>(this.courseTemplateUrl, {params: queryParams});
  }

  add(template: CourseTemplate): Observable<CourseTemplate> {
    return this.http.post<CourseTemplate>(this.courseTemplateListUrl, template);
  }

  delete(courseTemplateId: number): Observable<any> {
    let queryParams = new HttpParams().set('courseTemplateId', courseTemplateId)
    return this.http.delete(this.courseTemplateUrl, {params: queryParams});
  }

  update(courseTemplateId: number, courseTemplate: CourseTemplate): Observable<CourseTemplate> {
    let queryParams = new HttpParams().set('courseTemplateId', courseTemplateId)
    return this.http.put<CourseTemplate>(this.courseTemplateUrl, courseTemplate, {params: queryParams});
  }

  create(courseTemplateId: number): Observable<Course> {
    let queryParams = new HttpParams().set('courseTemplateId', courseTemplateId)
    return this.http.post<Course>(this.courseTemplateCreateUrl, {}, {params: queryParams});
  }

}
