import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Lesson} from "../../shared/model/Lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  rootUrl = '/api/courses/:courseId/chapters/:chapterId/lessons';
  idUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId';
  finishUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/finish';

  constructor(private http: HttpClient) {
  }


  getAll(courseId: number, chapterId: number): Observable<Lesson[]> {
    let url = this.rootUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString());

    return this.http.get<Lesson[]>(url);
  }

  getById(courseId: number, chapterId: number, lessonId: number): Observable<Lesson> {
    let url = this.idUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());
    return this.http.get<Lesson>(url);
  }

  finishLesson(courseId: number, chapterId: number, lessonId: number): Observable<any> {
    let url = this.finishUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());
    return this.http.put<string>(url, {});
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  CHAPTER_ID = ":chapterId",
  LESSON_ID = ":lessonId",

}
