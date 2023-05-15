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
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), chapterTemplateId.toString());
    return this.http.get<LessonTemplate[]>(url);
  }

  getById(courseTemplateId: number, chapterTemplateId: number, lessonTemplateId: number): Observable<LessonTemplate> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), chapterTemplateId.toString())
      .replace(TemplatePathVariable.LESSON_TEMPLATE_ID.toString(), lessonTemplateId.toString());
    return this.http.get<LessonTemplate>(url);
  }

  add(courseTemplateId: number, chapterTemplateId: number, template: LessonTemplate): Observable<LessonTemplate> {
    let url = this.rootUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), chapterTemplateId.toString());
    return this.http.post<LessonTemplate>(url, template);
  }

  delete(courseTemplateId: number, chapterTemplateId: number, lessonTemplateId: number): Observable<any> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), chapterTemplateId.toString())
      .replace(TemplatePathVariable.LESSON_TEMPLATE_ID.toString(), lessonTemplateId.toString());
    return this.http.delete(url);
  }

  update(courseTemplateId: number, chapterTemplateId: number, lessonTemplateId: number, template: LessonTemplate): Observable<LessonTemplate> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_TEMPLATE_ID.toString(), courseTemplateId.toString())
      .replace(TemplatePathVariable.CHAPTER_TEMPLATE_ID.toString(), chapterTemplateId.toString())
      .replace(TemplatePathVariable.LESSON_TEMPLATE_ID.toString(), lessonTemplateId.toString());
    return this.http.put<LessonTemplate>(url, template);
  }

}

enum TemplatePathVariable {

  COURSE_TEMPLATE_ID = ":courseTemplateId",
  CHAPTER_TEMPLATE_ID = ":chapterTemplateId",
  LESSON_TEMPLATE_ID = ":lessonTemplateId",

}
