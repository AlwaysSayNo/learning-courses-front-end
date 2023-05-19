import {Component, Input, OnInit} from '@angular/core';
import {finalize, Observable, Subscription} from "rxjs";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {Lesson} from "../../../shared/model/Lesson";
import {FileUploadService} from "../../../service/file-upload/file-upload.service";
import {FileInfo} from "../../../shared/model/FileInfo";
import {User} from "../../../shared/model/User";
import {UserInfo} from "../../../shared/model/UserInfo";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {RoleType} from "../../../shared/enum/RoleType";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() lesson!: Lesson;
  @Input() student!: User;

  @Input() canUpload = true;
  @Input() canDownload = true;
  @Input() canDelete = true;

  fileInfo!: FileInfo | null;
  uploadProgress!: number | null;
  downloadProgress!: number | null;
  uploadSub!: Subscription | null;
  downloadSub!: Subscription | null;

  constructor(private fileUploadService: FileUploadService,
              private authenticationService: AuthenticationService,) {
  }

  ngOnInit(): void {
    if (this.user.role == RoleType.STUDENT) {
      this.fileUploadService.getFileInfo(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
        .subscribe((info) => {
          this.fileInfo = info;
        });
    } else if (this.user.role == RoleType.INSTRUCTOR) {
      this.fileUploadService.getStudentFileInfo(this.lesson.courseId, this.lesson.chapterId, this.lesson.id, this.student.id)
        .subscribe((info) => {
          this.fileInfo = info;
        });
    }
  }

  //TODO when file's size is bigger then we can allow
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const upload$ = this.fileUploadService
        .uploadFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id, formData)
        .pipe(
          finalize(() => this.resetUpload())
        );

      this.uploadSub = upload$.subscribe(event => {
        if (event !== undefined) {
          if (event.type == HttpEventType.UploadProgress) {
            // @ts-ignore
            this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          } else if (event.type == HttpEventType.Response) {
            this.fileInfo = event.body;
          }
        }
      });
    }
  }

  canShowProgress() {
    return (this.uploadProgress && this.uploadProgress > 0)
      || (this.downloadProgress && this.downloadProgress > 0);
  }

  onCancelUpload() {
    this.uploadSub?.unsubscribe();
    this.resetUpload();
  }

  onCancelDownload() {
    this.downloadSub?.unsubscribe();
    this.resetDownload();
  }

  resetUpload() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

  resetDownload() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

  onDeleteFile() {
    this.fileUploadService.deleteFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
      .subscribe(() => {
        this.fileInfo = null;
      })
  }

  onDownloadFile() {
    let download$!: Observable<HttpEvent<Blob>>;

    if (this.user.role == RoleType.STUDENT) {
      download$ = this.fileUploadService.downloadFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
        .pipe(
          finalize(() => this.resetDownload())
        );
    } else if (this.user.role == RoleType.INSTRUCTOR) {
      download$ = this.fileUploadService.downloadFileById(this.fileInfo!.id)
        .pipe(
          finalize(() => this.resetDownload())
        );
    }

    this.downloadSub = download$.subscribe((event) => {
        if (event) {
          if (event.type == HttpEventType.DownloadProgress) {
            // @ts-ignore
            this.downloadProgress = Math.round(100 * (event.loaded / event.total));
          } else if (event.type == HttpEventType.Response) {
            let file = event.body;
            if (file) {
              this.fileDownload(file)
            }
          }
        }
      });
  }

  private fileDownload(file: Blob) {
    const a = document.createElement('a');
    const objectUrl = URL.createObjectURL(file);
    a.href = objectUrl;
    a.download = this.fileInfo?.title || '';
    a.click();
    URL.revokeObjectURL(objectUrl);
  }

  get user(): UserInfo {
    return this.authenticationService.userValue
  }

}
