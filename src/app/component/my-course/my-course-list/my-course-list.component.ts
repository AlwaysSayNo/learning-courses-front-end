import {Component, OnInit} from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {UserToCourseService} from "@app/service/user-to-course/user-to-course.service";
import {CourseStatus} from "@app/shared/enum/CourseStatus";

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

  constructor(private userToCourseService: UserToCourseService) { }

  ngOnInit(): void {
    this.userToCourseService.getAll()
      .subscribe((data) => {
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

}
