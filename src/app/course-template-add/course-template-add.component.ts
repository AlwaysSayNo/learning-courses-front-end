import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CourseTemplateService} from "../service/course-template/course-template.service";
import {CourseTemplate} from "../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-add',
  templateUrl: './course-template-add.component.html',
  styleUrls: ['./course-template-add.component.scss']
})
export class CourseTemplateAddComponent implements OnInit {

  template: CourseTemplate = {
    title: '',
    description: ''
  }

  constructor(private courseTemplateService: CourseTemplateService) { }

  ngOnInit(): void {
  }

  saveCourseTemplate(form: NgForm) {
    let n = this.courseTemplateService.getAll().length + 1;

    // With real backend we have to subscribe here to the action and update the form
    this.courseTemplateService.add({
      id: n,
      title: this.template.title,
      description: this.template.description
    });
    form.resetForm()
  }

}
