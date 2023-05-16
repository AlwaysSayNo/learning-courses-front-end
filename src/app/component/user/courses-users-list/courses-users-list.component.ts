import {Component, Input, OnInit} from '@angular/core';
import {RoleType} from "../../../shared/enum/RoleType";
import {User} from "../../../shared/model/User";
import {CourseService} from "../../../service/course/course.service";

@Component({
  selector: 'app-courses-users-list',
  templateUrl: './courses-users-list.component.html',
  styleUrls: ['./courses-users-list.component.scss']
})
export class CoursesUsersListComponent implements OnInit {

  @Input() userRole?: RoleType;
  @Input() courseId!: number;
  users!: User[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllUsersForCourse(this.courseId, this.userRole)
      .subscribe((users) => {
        this.users = users;
      });
  }

}
