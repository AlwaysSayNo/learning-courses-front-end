import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {RoleType} from "@app/shared/enum/RoleType";
import {UserToCourseService} from "@app/service/user-to-course/user-to-course.service";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {UserInfo} from "@app/shared/model/UserInfo";
import {SecurityService} from "@app/service/security/security.service";
import {catchError, concatMap } from "rxjs";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  course!: Course;
  userToCourse?: UserToCourse;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService,
              private authenticationService: SecurityService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseId = +queryParams.get('courseId')!;
        return this.courseService.getById(this.courseId)
      }))
      .pipe(catchError((err) => {
        void this.router.navigate(["/courses"])
        throw new Error(err)
      }), concatMap((course) => {
        this.course = course;
        return this.userToCourseService.getById(this.courseId)
      }))
      .subscribe({
        next: (usersData) => {
          this.userToCourse = usersData;
        },
        error: () => {
          console.log("User doesn't take a part in this course yet")
        }
      });
  }

  //TODO we cannot get id yet (need changes on the backend side)
  enrollWithoutApproval(): void {
    this.courseService.enrollWithoutApproval(this.courseId, this.user.id).subscribe((data) => {
      this.userToCourse = data;
    });
  }

  get user(): UserInfo {
    return this.authenticationService.userValue;
  }

}
