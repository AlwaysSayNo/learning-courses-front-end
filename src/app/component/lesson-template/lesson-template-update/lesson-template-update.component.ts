import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LessonTemplate} from "@app/shared/model/LessonTemplate";

@Component({
  selector: 'app-lesson-template-update',
  templateUrl: './lesson-template-update.component.html',
  styleUrls: ['./lesson-template-update.component.scss']
})
export class LessonTemplateUpdateComponent implements OnInit {

  @Input() template!: LessonTemplate;
  @Output() updateLessonTemplate = new EventEmitter<LessonTemplate>();

  constructor() {
  }

  ngOnInit(): void {
    this.template = {...this.template}
  }

  update(): void {
    this.updateLessonTemplate.emit(this.template);
  }

}
