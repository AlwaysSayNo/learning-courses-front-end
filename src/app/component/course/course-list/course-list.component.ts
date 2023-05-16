import { Component, OnInit } from '@angular/core';
import {Course} from "../../../shared/model/Course";
import {CourseService} from "../../../service/course/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses!: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe((data) => {
      this.courses = data;
    });
  }

}
