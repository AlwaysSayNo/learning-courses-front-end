import {Component, OnInit} from '@angular/core';
import {Course} from "../../../shared/model/Course";
import {UserToCourseService} from "../../../service/user-to-course/user-to-course.service";
import {CourseStatus} from "../../../shared/enum/CourseStatus";

@Component({
  selector: 'app-my-course-list',
  templateUrl: './my-course-list.component.html',
  styleUrls: ['./my-course-list.component.scss']
})
export class MyCourseListComponent implements OnInit {

  courses!: Course[];
  allCourses!: Course[];
  statuses!: CourseStatus[];
  selectedStatus!: CourseStatus;

  constructor(private userToCourseService: UserToCourseService) { }

  ngOnInit(): void {
    this.selectedStatus = CourseStatus.ALL;
    this.statuses = [CourseStatus.ALL, CourseStatus.ACTIVE, CourseStatus.FINISHED];

    this.userToCourseService.getAll().subscribe((data) => {
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
