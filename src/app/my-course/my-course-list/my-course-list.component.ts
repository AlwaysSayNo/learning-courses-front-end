import { Component, OnInit } from '@angular/core';
import {Course} from "../../shared/model/Course";
import {UserToCourseService} from "../../service/user-to-course/user-to-course.service";

@Component({
  selector: 'app-my-course-list',
  templateUrl: './my-course-list.component.html',
  styleUrls: ['./my-course-list.component.scss']
})
export class MyCourseListComponent implements OnInit {

  courses!: Course[];

  constructor(private userToCourseService: UserToCourseService) { }

  ngOnInit(): void {
    this.userToCourseService.getAll().subscribe((data) => {
      this.courses = data;
    });
  }

}
