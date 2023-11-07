import {Component, OnInit} from '@angular/core';
import {Lesson} from "@app/shared/model/Lesson";
import {UserToLesson} from "@app/shared/model/UserToLesson";
import {ActivatedRoute, Router} from "@angular/router";
import {UserToCourseService} from "@app/service/user-to-course/user-to-course.service";
import {CourseService} from "@app/service/course/course.service";
import {SecurityService} from "@app/service/security/security.service";
import {UserInfo} from "@app/shared/model/UserInfo";
import {RoleType} from "@app/shared/enum/RoleType";
import {User} from "@app/shared/model/User";
import {LessonService} from "@app/service/lesson/lesson.service";

@Component({
  selector: 'app-my-lesson-list',
  templateUrl: './my-lesson-list.component.html',
  styleUrls: ['./my-lesson-list.component.scss']
})
export class MyLessonListComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  lessons!: Lesson[];
  lessonIdToUserToLesson = new Map<number, UserToLesson>();
  students!: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private lessonService: LessonService,
              private userToCourseService: UserToCourseService,
              private authenticationService: SecurityService) {
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
        for (let i = 0; i < userToLessons.length; ++i) {
          this.lessonIdToUserToLesson.set(userToLessons[i].lessonId, userToLessons[i]);
        }
      });

    this.courseService.getAllUserToCourseInfo(this.courseId, RoleType.STUDENT)
      .subscribe((users) => {
        this.students = users.map(info => info.user);
      })
  }

  user(): UserInfo {
    return this.authenticationService.userValue;
  }

  onLessonClose(lesson: Lesson): void {
    this.lessonService.finishLesson(lesson.courseId, lesson.chapterId, lesson.id)
      .subscribe(() => {
        lesson.isFinished = true;
      });

  }

}

enum PathVariable {

  COURSE_ID = "courseId",

}
