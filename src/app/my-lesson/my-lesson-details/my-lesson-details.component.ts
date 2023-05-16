import {Component, OnInit} from '@angular/core';
import {UserToLesson} from "../../shared/model/UserToLesson";
import {Lesson} from "../../shared/model/Lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../service/course/course.service";
import {UserToCourseService} from "../../service/user-to-course/user-to-course.service";

@Component({
  selector: 'app-my-lesson-details',
  templateUrl: './my-lesson-details.component.html',
  styleUrls: ['./my-lesson-details.component.scss']
})
export class MyLessonDetailsComponent implements OnInit {

  courseId!: number;
  lessonId!: number;
  lesson!: Lesson;
  userToLesson!: UserToLesson;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params[PathVariable.COURSE_ID];
      this.lessonId = params[PathVariable.LESSON_ID];
    });

    this.courseService.getLessonsInCourse(this.courseId, this.lessonId)
      .subscribe((lesson) => {
        this.lesson = lesson;
      });

    this.userToCourseService.geUserToLessonInfo(this.courseId, this.lessonId)
      .subscribe((userToLesson) => {
        this.userToLesson = userToLesson;
      });
  }

}

enum PathVariable {

  COURSE_ID = "courseId",
  LESSON_ID = "lessonId"

}
