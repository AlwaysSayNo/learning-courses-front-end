import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {FileInfo} from "../../shared/model/FileInfo";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  fileInfoUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/info';
  fileInfoByIdUrl = '/api/file/:fileId';
  fileStudentInfoUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/info/:userId';
  fileUploadUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/upload';
  fileDeleteUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/delete';
  fileDownloadUrl = '/api/courses/:courseId/chapters/:chapterId/lessons/:lessonId/files/download';
  fileDownloadByIdUrl = '/api/file/:fileId/download';

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

  getStudentFileInfo(courseId: number, chapterId: number, lessonId: number, userId: number): Observable<FileInfo> {
    let url = this.fileStudentInfoUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString())
      .replace(TemplatePathVariable.USER_ID.toString(), userId.toString());

    return this.http.get<FileInfo>(url);
  }

  getFileInfoById(fileId: number): Observable<FileInfo> {
    let url = this.fileInfoByIdUrl
      .replace(TemplatePathVariable.FILE_ID.toString(), fileId.toString());

    return this.http.get<FileInfo>(url);
  }

  deleteFile(courseId: number, chapterId: number, lessonId: number): Observable<any> {
    let url = this.fileDeleteUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.delete<any>(url);
  }

  downloadFile(courseId: number, chapterId: number, lessonId: number): Observable<HttpEvent<Blob>> {
    let url = this.fileDownloadUrl
      .replace(TemplatePathVariable.COURSE_ID.toString(), courseId.toString())
      .replace(TemplatePathVariable.CHAPTER_ID.toString(), chapterId.toString())
      .replace(TemplatePathVariable.LESSON_ID.toString(), lessonId.toString());

    return this.http.get(url, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

  downloadFileById(fileId: number): Observable<HttpEvent<Blob>> {
    let url = this.fileDownloadByIdUrl
      .replace(TemplatePathVariable.FILE_ID.toString(), fileId.toString());

    return this.http.get(url, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}

enum TemplatePathVariable {

  COURSE_ID = ":courseId",
  CHAPTER_ID = ":chapterId",
  LESSON_ID = ":lessonId",
  FILE_ID = ":fileId",
  USER_ID = ":userId"

}
