import {Component, OnInit} from '@angular/core';
import {UserToLesson} from "@app/shared/model/UserToLesson";
import {Lesson} from "@app/shared/model/Lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {UserInfo} from "@app/shared/model/UserInfo";
import {SecurityService} from "@app/service/security/security.service";
import {RoleType} from "@app/shared/enum/RoleType";
import {User} from "@app/shared/model/User";
import {UserService} from "@app/service/user/user.service";
import {NgModel} from "@angular/forms";
import {LessonService} from "@app/service/lesson/lesson.service";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-my-lesson-details',
  templateUrl: './my-lesson-details.component.html',
  styleUrls: ['./my-lesson-details.component.scss']
})
export class MyLessonDetailsComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  chapterId!: number;
  lessonId!: number;
  studentId!: number;
  lesson!: Lesson;
  userToLesson!: UserToLesson;

  student!: User;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private lessonService: LessonService,
              private authenticationService: SecurityService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseId = +queryParams.get("courseId")!;
        this.chapterId = +queryParams.get("chapterId")!;
        this.lessonId = +queryParams.get("lessonId")!;

        this.studentId = this.user.role == RoleType.STUDENT ?
          this.user.id : +queryParams.get("studentId")!;

        return this.userService.getById(this.studentId);
      }))
      .pipe(concatMap((student) => {
        this.student = student;
        return this.lessonService.getById(this.lessonId);
      }))
      .pipe(concatMap((lesson) => {
        this.lesson = lesson;
        return this.lessonService.getUsersLessonInfo(this.lessonId, this.studentId);
      }))
      .subscribe({
        next: (userToLesson) => {
          this.userToLesson = userToLesson;
        },
        error: (err) => {
          console.error("No lesson with such user");
          console.error(err)
          void this.router.navigate(["/my/chapters/chapter/lessons"],
            {queryParams: {'courseId': this.courseId, 'chapterId': this.chapterId}});
        }
      });
  }

  get user(): UserInfo {
    return this.authenticationService.userValue
  }

  onAssignMark(newMark: NgModel) {
    let mark: number = newMark.value;
    /*if (mark) {
      this.userToLesson.mark = mark;
      this.courseService.updateUsersLessonInfo(this.courseId, this.lessonId, this.student.id, this.userToLesson)
        .subscribe((userToLesson) => {
        this.userToLesson = userToLesson;
      })
    }*/
  }
}
