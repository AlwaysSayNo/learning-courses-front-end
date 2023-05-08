import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
              private courseTemplateService: CourseTemplateService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['courseTemplateId']) {
        console.log(params['courseTemplateId'])
        console.log(this.courseTemplateService.getById(params['courseTemplateId']))
        this.courseTemplate = this.courseTemplateService.getById(params['courseTemplateId'])
      }
    })
    console.log(this.courseTemplate);
  }

}
