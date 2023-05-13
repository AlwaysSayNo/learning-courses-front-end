import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LessonTemplate} from "../../shared/model/LessonTemplate";

@Component({
  selector: 'app-lesson-template-add',
  templateUrl: './lesson-template-add.component.html',
  styleUrls: ['./lesson-template-add.component.scss']
})
export class LessonTemplateAddComponent implements OnInit {

  template: LessonTemplate = {
    id: 0,
    title: '',
    description: '',
    number: 1,
    maxMark: 10,
    successMark: 5
  };
  @Output() addLessonTemplate = new EventEmitter<LessonTemplate>();

  constructor() {
  }

  ngOnInit(): void {
  }

  saveLessonTemplate(): void {
   this.addLessonTemplate.emit(this.template);
  }

}
