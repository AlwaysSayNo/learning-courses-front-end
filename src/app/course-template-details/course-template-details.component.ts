import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseTemplateService} from "../service/course-template/course-template.service";
import {CourseTemplate} from "../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-details',
  templateUrl: './course-template-details.component.html',
  styleUrls: ['./course-template-details.component.scss']
})
export class CourseTemplateDetailsComponent implements OnInit {

  courseTemplate!: CourseTemplate;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseTemplateService: CourseTemplateService) {
  }

  //TODO exception handling
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseTemplate = this.courseTemplateService.getById(params['courseTemplateId'])
    })
  }

  delete(): void {
    this.courseTemplateService.delete(this.courseTemplate.id);
    void this.router.navigateByUrl('/course-templates');
  }
}
