import {Component, OnInit} from '@angular/core';
import {Course} from "../../../shared/model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../service/course/course.service";
import {User} from "../../../shared/model/User";
import {RoleType} from "../../../shared/enum/RoleType";
import {UserToCourseService} from "../../../service/user-to-course/user-to-course.service";
import {UserToCourse} from "../../../shared/model/UserToCourse";
import {UserInfo} from "../../../shared/model/UserInfo";
import {AuthenticationService} from "../../../service/authentication/authentication.service";

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
  instructors!: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['courseId'];
    });

    this.courseService.getById(this.courseId).subscribe((data) =>{
      this.course = data;
    });

    this.courseService.getAllUsersForCourse(this.courseId, RoleType.INSTRUCTOR).subscribe((data) => {
      this.instructors = data;
    });

    this.userToCourseService.getById(this.courseId).subscribe({
      next: (data) => {
        this.userToCourse = data;
      },
      error: () => {}
    });
  }

  enroll(): void {
    this.courseService.enroll(this.courseId).subscribe((data) => {
      this.userToCourse = data;
    });
  }

  user (): UserInfo {
    return this.authenticationService.userValue;
  }

}
