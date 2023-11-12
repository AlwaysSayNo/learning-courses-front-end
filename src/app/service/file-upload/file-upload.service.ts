import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {FileInfo} from "@app/shared/model/FileInfo";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private fileInLessonListUrl = '/api/lessons/lesson/files';
  private usersFileInLessonInfoUrl = '/api/lessons/lesson/files/file/info';
  private usersFileInLessonUrl = '/api/lessons/lesson/files/file';

  constructor(private http: HttpClient) {
  }


  uploadFile(lessonId: number, file: FormData): Observable<HttpEvent<FileInfo>> {
    let queryParams = new HttpParams().set('lessonId', lessonId)
    return this.http.post<FileInfo>(this.fileInLessonListUrl, file, {
      params: queryParams,
      reportProgress: true,
      observe: 'events'
    });
  }

  getStudentFileInfo(lessonId: number, userId: number): Observable<FileInfo> {
    let queryParams = new HttpParams().set('lessonId', lessonId).set('userId', userId);
    return this.http.get<FileInfo>(this.usersFileInLessonInfoUrl, {params: queryParams});
  }

  deleteFile(lessonId: number, userId: number): Observable<any> {
    let queryParams = new HttpParams().set('lessonId', lessonId).set('userId', userId);
    return this.http.delete<any>(this.usersFileInLessonUrl, {params: queryParams});
  }

  downloadFile(lessonId: number, userId: number): Observable<HttpEvent<Blob>> {
    let queryParams = new HttpParams().set('lessonId', lessonId).set('userId', userId);
    return this.http.get(this.usersFileInLessonUrl, {
      params: queryParams,
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

  //TODO
  downloadFileById(fileId: number): Observable<HttpEvent<Blob>> {
    // let url = this.fileDownloadByIdUrl
    //   .replace(TemplatePathVariable.FILE_ID.toString(), fileId.toString());

    return this.http.get("url", {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
