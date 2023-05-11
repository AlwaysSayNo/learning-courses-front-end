import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";

@Component({
  selector: 'app-chapter-template-update',
  templateUrl: './chapter-template-update.component.html',
  styleUrls: ['./chapter-template-update.component.scss']
})
export class ChapterTemplateUpdateComponent implements OnInit {

  @Input() template!: ChapterTemplate;
  @Output() updateCourseTemplate = new EventEmitter<ChapterTemplate>();

  constructor() {
  }

  ngOnInit(): void {
    this.template = {...this.template}
  }

  update(): void {
    this.updateCourseTemplate.emit(this.template);
  }

}
