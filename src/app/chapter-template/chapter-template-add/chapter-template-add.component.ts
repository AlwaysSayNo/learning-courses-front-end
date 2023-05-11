import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";

@Component({
  selector: 'app-chapter-template-add',
  templateUrl: './chapter-template-add.component.html',
  styleUrls: ['./chapter-template-add.component.scss']
})
export class ChapterTemplateAddComponent implements OnInit {

  template: ChapterTemplate = {
    id: 0,
    number: 0,
    title: '',
    description: ''
  };
  @Output() addChapterTemplate = new EventEmitter<ChapterTemplate>();

  constructor() {
  }

  ngOnInit(): void {
  }


  saveChapterTemplate(): void {
    this.addChapterTemplate.emit(this.template);
  }
}
