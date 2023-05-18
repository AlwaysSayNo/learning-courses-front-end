import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {FileInfo} from "../../shared/model/FileInfo";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  fileInfoUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/info';
  fileUploadUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/upload';
  fileDeleteUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/delete';

  constructor(private http: HttpClient) {
  }


  uploadFile(courseId: number, chapterId: number, lessonId: number, file: FormData): Observable<HttpEvent<FileInfo>> {
    let url = this.fileUploadUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.post<FileInfo>(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getFileInfo(courseId: number, chapterId: number, lessonId: number): Observable<FileInfo> {
    let url = this.fileInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.get<FileInfo>(url);
  }

  deleteFile(courseId: number, chapterId: number, lessonId: number): Observable<any> {
    let url = this.fileDeleteUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.delete<any>(url);
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  CHAPTER_ID = ":chapterId",
  LESSON_ID = ":lessonId",

}
