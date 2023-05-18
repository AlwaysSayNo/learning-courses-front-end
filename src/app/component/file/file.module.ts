import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileRoutingModule} from './file-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {FileComponent} from "./file/file.component";


@NgModule({
  declarations: [
    FileComponent
  ],
  exports: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class FileModule {
}
