import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseTemplateService} from "@app/service/course-template/course-template.service";
import {CourseTemplate} from "@app/shared/model/CourseTemplate";
import {concatMap} from "rxjs";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";

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
              private courseTemplateService: CourseTemplateService,
              private securityService: SecurityService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(concatMap((queryParams) => {
        let id = +queryParams.get('courseTemplateId')!;
        return this.courseTemplateService.getById(id);
      }))
      .subscribe({
        next: (courseTemplate) => {
          this.courseTemplate = courseTemplate
        },
        error: () => {
          console.log("Such course template doesn't exist.")
          void this.router.navigate(["/templates/courses"])
        }
      })
  }

  onCourseTemplateDelete(): void {
    this.courseTemplateService.delete(this.courseTemplate.id)
      .subscribe(() => {
        void this.router.navigateByUrl('/templates/courses');
      });
  }

  onUpdateCourseTemplate(courseTemplate: CourseTemplate): void {
    this.courseTemplate = {...courseTemplate};
    this.courseTemplateService.update(this.courseTemplate.id, this.courseTemplate)
      .subscribe(() => {
        this.showUpdateForm = false;
      });
  }

  onCreateCourseFromTemplate(): void {
    this.courseTemplateService.create(this.courseTemplate.id)
      .subscribe((course) => {
        void this.router.navigate(
          ['/courses/course', course.id],
          {queryParams: {'courseId': course.id}}
        );
      });
  }

  get user(): UserInfo {
    return this.securityService.userValue
  }

}
