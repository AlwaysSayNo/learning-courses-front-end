import {Component, Input, OnInit} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";
import {Lesson} from "../../../shared/model/Lesson";
import {FileUploadService} from "../../../service/file-upload/file-upload.service";
import {FileInfo} from "../../../shared/model/FileInfo";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input()
  lesson!: Lesson;

  fileInfo!: FileInfo | null;
  uploadProgress!: number | null;
  downloadProgress!: number | null;
  uploadSub!: Subscription | null;
  downloadSub!: Subscription | null;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.fileUploadService.getFileInfo(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
      .subscribe((info) => {
        this.fileInfo = info;
      });
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

  cancelUpload() {
    this.uploadSub?.unsubscribe();
    this.resetUpload();
  }

  cancelDownload() {
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
    const download$ =  this.fileUploadService.downloadFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
      .pipe(
      finalize(() => this.resetDownload())
    );

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

}
