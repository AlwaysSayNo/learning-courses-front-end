import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileUploadRoutingModule} from './file-upload-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {FileUploadComponent} from "./file-upload/file-upload.component";


@NgModule({
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class FileUploadModule {
}
