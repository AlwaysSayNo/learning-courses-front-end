import {Component, OnInit} from '@angular/core';
import {CourseTemplateService} from "../service/course-template/course-template.service";
import {CourseTemplate} from "../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-list',
  templateUrl: './course-template-list.component.html',
  styleUrls: ['./course-template-list.component.scss']
})
export class CourseTemplateListComponent implements OnInit {

  templates!: CourseTemplate[];
  showForm = false;

  constructor(private courseTemplateService: CourseTemplateService) {
  }

  ngOnInit(): void {
    this.templates = this.courseTemplateService.getAll();
  }

  onAddCourseTemplate(courseTemplate: CourseTemplate) {
    this.courseTemplateService.add(courseTemplate);
    this.showForm = false;
  }
}
