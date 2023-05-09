import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-update',
  templateUrl: './course-template-update.component.html',
  styleUrls: ['./course-template-update.component.scss']
})
export class CourseTemplateUpdateComponent implements OnInit {

  @Input() template!: CourseTemplate;
  @Output() updateCourseTemplate = new EventEmitter<CourseTemplate>();

  constructor() { }

  ngOnInit(): void {
    this.template = {...this.template}
  }


  update(): void {
    this.updateCourseTemplate.emit(this.template);
  }
}
