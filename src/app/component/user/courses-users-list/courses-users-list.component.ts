import {Component, Input, OnInit} from '@angular/core';
import {RoleType} from "../../../shared/enum/RoleType";
import {CourseService} from "../../../service/course/course.service";
import {UserToCourseInfo} from "../../../shared/model/UserToCourseInfo";

@Component({
  selector: 'app-courses-users-list',
  templateUrl: './courses-users-list.component.html',
  styleUrls: ['./courses-users-list.component.scss']
})
export class CoursesUsersListComponent implements OnInit {

  @Input() userRole?: RoleType;
  @Input() courseId!: number;

  infos!: UserToCourseInfo[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllUserToCourseInfo(this.courseId, this.userRole)
      .subscribe((infos) => {
        this.infos = infos;
      });
  }

}
