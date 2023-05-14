import {Component, OnInit} from '@angular/core';
import {Course} from "../../shared/model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../service/course/course.service";
import {User} from "../../shared/model/User";
import {RoleType} from "../../shared/enum/RoleType";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course!: Course;
  instructors!: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    let id: number = -1;
    this.route.params.subscribe((params) => {
      id = params['courseId'];
    });

    this.courseService.getById(id).subscribe((data) =>{
      this.course = data;
    });

    this.courseService.getAllUsersForCourse(id, RoleType.INSTRUCTOR).subscribe((data) => {
      this.instructors = data;
    });

    console.log(this.instructors)
  }

}
