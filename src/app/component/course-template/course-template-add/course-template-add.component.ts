import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseTemplate} from "../../../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-add',
  templateUrl: './course-template-add.component.html',
  styleUrls: ['./course-template-add.component.scss']
})
export class CourseTemplateAddComponent implements OnInit {

  template: CourseTemplate = {
    id: 0,
    title: '',
    description: ''
  };
  @Output() addCourseTemplate = new EventEmitter<CourseTemplate>();

  constructor() {
  }

  ngOnInit(): void {
  }

  saveCourseTemplate() {
    this.addCourseTemplate.emit(this.template);
  }

}
