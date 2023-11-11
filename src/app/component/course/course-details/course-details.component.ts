import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {RoleType} from "@app/shared/enum/RoleType";
import {UserToCourse} from "@app/shared/model/UserToCourse";
import {UserInfo} from "@app/shared/model/UserInfo";
import {SecurityService} from "@app/service/security/security.service";
import {catchError, concatMap} from "rxjs";
import {MyService} from "@app/service/my/my.service";

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
              private myService: MyService,
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
        return this.myService.getMyCourseByCourseId(this.courseId)
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

  enrollWithoutApproval(): void {
    this.courseService.enrollWithoutApproval(this.courseId, this.user.id)
      .subscribe({next: (data) =>{
      this.userToCourse = data;
    },
        error: () => {
          void this.router.navigate(["/courses"]);
          console.log("User doesn't contain userId");
        }
  });
  }

  get user(): UserInfo {
    return this.authenticationService.userValue;
  }

}
