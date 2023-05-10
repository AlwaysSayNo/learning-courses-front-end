import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseTemplateService} from "../../service/course-template/course-template.service";
import {CourseTemplate} from "../../shared/model/CourseTemplate";

@Component({
  selector: 'app-course-template-details',
  templateUrl: './course-template-details.component.html',
  styleUrls: ['./course-template-details.component.scss']
})
export class CourseTemplateDetailsComponent implements OnInit {

  courseTemplate!: CourseTemplate;
  showUpdateForm = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseTemplateService: CourseTemplateService) {
  }

  //TODO exception handling
  ngOnInit(): void {
    let id: number = -1;
    this.route.params.subscribe((params) => {
      id = params['courseTemplateId'];
    });

    this.courseTemplateService.getById(id).subscribe((data) =>{
      this.courseTemplate = data;
    });
  }

  //TODO exception handling if return to deleted page
  delete(): void {
    this.courseTemplateService.delete(this.courseTemplate.id);
    void this.router.navigateByUrl('/course-templates');
  }

  onUpdateCourseTemplate(courseTemplate: CourseTemplate): void {
    this.courseTemplate = {...courseTemplate};
    this.courseTemplateService.update(this.courseTemplate);
    this.showUpdateForm = false;
  }
}
