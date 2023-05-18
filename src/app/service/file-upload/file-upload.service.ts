import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  fileUploadUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/upload';

  constructor(private http: HttpClient) {
  }


  uploadFile(courseId: number, chapterId: number, lessonId: number, file: FormData): Observable<any> {
    let url = this.fileUploadUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.post<any>(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  CHAPTER_ID = ":chapterId",
  LESSON_ID = ":lessonId",

}
