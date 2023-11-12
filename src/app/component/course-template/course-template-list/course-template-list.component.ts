import {Component, OnInit} from '@angular/core';
import {CourseTemplateService} from "@app/service/course-template/course-template.service";
import {CourseTemplate} from "@app/shared/model/CourseTemplate";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";

@Component({
  selector: 'app-course-template-list',
  templateUrl: './course-template-list.component.html',
  styleUrls: ['./course-template-list.component.scss']
})
export class CourseTemplateListComponent implements OnInit {

  templates!: CourseTemplate[];
  showCreateForm = false;

  constructor(private courseTemplateService: CourseTemplateService,
              private securityService: SecurityService) {
  }

  ngOnInit(): void {
    this.courseTemplateService.getAll().subscribe((data) => {
      this.templates = data;
    });
  }

  onAddCourseTemplate(courseTemplate: CourseTemplate) {
    this.courseTemplateService.add(courseTemplate).subscribe((data) => {
      this.templates.push(data);
    });
    this.showCreateForm = false;
  }

  get user(): UserInfo {
    return this.securityService.userValue
  }

}
