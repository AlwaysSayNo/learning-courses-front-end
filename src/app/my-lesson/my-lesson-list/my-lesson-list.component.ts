import {Component, OnInit} from '@angular/core';
import {Lesson} from "../../shared/model/Lesson";
import {UserToLesson} from "../../shared/model/UserToLesson";
import {ActivatedRoute, Router} from "@angular/router";
import {UserToCourseService} from "../../service/user-to-course/user-to-course.service";
import {CourseService} from "../../service/course/course.service";

@Component({
  selector: 'app-my-lesson-list',
  templateUrl: './my-lesson-list.component.html',
  styleUrls: ['./my-lesson-list.component.scss']
})
export class MyLessonListComponent implements OnInit {

  courseId!: number;
  lessons!: Lesson[];
  userToLessons!: UserToLesson[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params[PathVariable.COURSE_ID];
    });

    this.courseService.getAllLessonsInCourse(this.courseId)
      .subscribe((lesson) => {
        this.lessons = lesson;
      });

    this.userToCourseService.getAllUserToLessonsInCourse(this.courseId)
      .subscribe((userToLessons) => {
        this.userToLessons = userToLessons;
      });
  }

}

enum PathVariable {

  COURSE_ID = "courseId",

}
