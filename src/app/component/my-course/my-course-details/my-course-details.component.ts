import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {RoleType} from "@app/shared/enum/RoleType";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {UserToCourseService} from "@app/service/user-to-course/user-to-course.service";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService,
              private authenticationService: SecurityService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params[PathVariable.COURSE_ID];
    });

    this.courseService.getById(this.courseId).subscribe((data) => {
      this.course = data;
    });

    this.userToCourseService.getById(this.courseId).subscribe((data) => {
      this.userToCourse = data;
    });
  }

  user(): UserInfo {
    return this.authenticationService.userValue;
  }

  onCourseClose(): void {
    this.courseService.finish(this.courseId)
      .subscribe(() => {
        this.course.isFinished = true;
      })
  }
}

enum PathVariable {

  COURSE_ID = "courseId",

}
