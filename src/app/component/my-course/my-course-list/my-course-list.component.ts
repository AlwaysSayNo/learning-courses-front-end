import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {CourseStatus} from "@app/shared/enum/CourseStatus";
import {MyService} from "@app/service/my/my.service";
import {CourseService} from "@app/service/course/course.service";
import {Observable} from "rxjs";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";

@Component({
  selector: 'app-my-course-list',
  templateUrl: './my-course-list.component.html',
  styleUrls: ['./my-course-list.component.scss']
})
export class MyCourseListComponent implements OnInit {

  courses!: Course[];
  allCourses!: Course[];
  statuses: CourseStatus[] = [CourseStatus.ALL, CourseStatus.FINISHED, CourseStatus.ACTIVE];
  selectedStatus: CourseStatus = CourseStatus.ALL;

  constructor(private myService: MyService,
              private courseService: CourseService,
              private securityService: SecurityService) {
  }

  ngOnInit(): void {
    let sub$: Observable<Course[]>;

    if (this.user.role == 'ADMIN') {
      sub$ = this.courseService.getAll(null);
    } else {
      sub$ = this.myService.getAllMyCourse();
    }

    sub$.subscribe((data) => {
      this.allCourses = data;
      this.courses = this.filterAllCoursesByStatus(this.selectedStatus);
    });
  }

  onStatusSelect(status: CourseStatus): void {
    this.selectedStatus = status;
    this.courses = this.filterAllCoursesByStatus(this.selectedStatus)
  }

  private filterAllCoursesByStatus(status: CourseStatus): Course[] {
    return this.allCourses.filter(course => {
      if (status == CourseStatus.ACTIVE) {
        return !course.isFinished;
      } else if (status == CourseStatus.FINISHED) {
        return course.isFinished;
      }
      return true;
    })
  }

  get user(): UserInfo {
    return this.securityService.userValue;
  }

}
