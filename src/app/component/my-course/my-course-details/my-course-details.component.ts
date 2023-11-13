import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {RoleType} from "@app/shared/enum/RoleType";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";
import {concatMap} from "rxjs";
import {MyService} from "@app/service/my/my.service";

@Component({
  selector: 'app-my-course-details',
  templateUrl: './my-course-details.component.html',
  styleUrls: ['./my-course-details.component.scss']
})
export class MyCourseDetailsComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  course!: Course;
  userToCourse!: UserToCourse;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private myService: MyService,
              private securityService: SecurityService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseId = +queryParams.get('courseId')!;
        return this.courseService.getById(this.courseId);
      }))
      .pipe(concatMap((course) => {
        this.course = course;
        return this.myService.getMyCourseByCourseId(this.courseId);
      }))
      .subscribe({
        next: (userToCourse) => {
          this.userToCourse = userToCourse
        },
        error: (err) => {
          console.error(err);
          if (this.user.role == 'STUDENT') {
            void this.router.navigate(["/my/courses"]);
          }
        }
      })
  }

  get user(): UserInfo {
    return this.securityService.userValue;
  }

  onCourseClose(): void {
    this.courseService.finish(this.courseId)
      .subscribe(() => {
        this.course.isFinished = true;
      })
  }
}
