import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../../shared/model/Lesson";
import {CourseService} from "../../../service/course/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  lessons!: Lesson[];
  courseId!: number;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['courseId'];
    });

    this.courseService.getAllLessonsInCourse(this.courseId).subscribe((data) => {
      this.lessons = data;
    });
  }

}
