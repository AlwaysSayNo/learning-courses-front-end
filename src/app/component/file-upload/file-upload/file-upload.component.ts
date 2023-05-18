import {Component, Input, OnInit} from '@angular/core';
import {finalize, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";
import {Lesson} from "../../../shared/model/Lesson";
import {FileUploadService} from "../../../service/file-upload/file-upload.service";
import {FileInfo} from "../../../shared/model/FileInfo";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input()
  lesson!: Lesson;

  fileInfo!: FileInfo | null;
  uploadProgress!: number | null;
  uploadSub!: Subscription | null;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
    this.fileUploadService.getFileInfo(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
      .subscribe((info) => {
        this.fileInfo = info;
      })
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const upload$ = this.fileUploadService
        .uploadFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id, formData)
        .pipe(
          finalize(() => this.reset())
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

  cancelUpload() {
    this.uploadSub?.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

  onDeleteFile() {
    this.fileUploadService.deleteFile(this.lesson.courseId, this.lesson.chapterId, this.lesson.id)
      .subscribe(() => {
        this.fileInfo = null;
      })
  }
}
