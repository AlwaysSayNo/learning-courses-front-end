import {Component, OnInit} from '@angular/core';
import {CourseTemplateService} from "@app/service/course-template/course-template.service";
import {CourseTemplate} from "@app/shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-list',
  templateUrl: './course-template-list.component.html',
  styleUrls: ['./course-template-list.component.scss']
})
export class CourseTemplateListComponent implements OnInit {

  templates!: CourseTemplate[];
  showCreateForm = false;

  constructor(private courseTemplateService: CourseTemplateService) {
  }

  ngOnInit(): void {
    this.courseTemplateService.getAll().subscribe((data) => {
      this.templates = data;
    });
  }

  //TODO is it a good solution to add pushed course template to templates without call to server on get
  onAddCourseTemplate(courseTemplate: CourseTemplate) {
    this.courseTemplateService.add(courseTemplate).subscribe((data) => {
      this.templates.push(data);
    });
    this.showCreateForm = false;
  }
}
