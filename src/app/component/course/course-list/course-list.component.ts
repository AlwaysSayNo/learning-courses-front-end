import { Component, OnInit } from '@angular/core';
import {Course} from "@app/shared/model/Course";
import {CourseService} from "@app/service/course/course.service";

// List of currently active courses
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses!: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll(true).subscribe((data) => {
      this.courses = data;
    });
  }

}
