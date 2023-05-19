import {Component, Input, OnInit} from '@angular/core';
import {UserToLesson} from "../../../shared/model/UserToLesson";
import {Lesson} from "../../../shared/model/Lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../service/course/course.service";
import {UserToCourseService} from "../../../service/user-to-course/user-to-course.service";
import {UserInfo} from "../../../shared/model/UserInfo";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {RoleType} from "../../../shared/enum/RoleType";
import {User} from "../../../shared/model/User";
import {UserService} from "../../../service/user/user.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-my-lesson-details',
  templateUrl: './my-lesson-details.component.html',
  styleUrls: ['./my-lesson-details.component.scss']
})
export class MyLessonDetailsComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  lessonId!: number;
  lesson!: Lesson;
  userToLesson!: UserToLesson;

  student!: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private userToCourseService: UserToCourseService,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params[PathVariable.COURSE_ID];
      this.lessonId = params[PathVariable.LESSON_ID];
    });

    //TODO it's bad practise, but we use the same array for one student and array of students for instructor
    // please split the logic later
    let role = this.user.role;
    if (role == RoleType.STUDENT) {
      this.userToCourseService.geUserToLessonInfo(this.courseId, this.lessonId)
        .subscribe((userToLesson) => {
            this.userToLesson = userToLesson;
          },
          () => {
          },
          () => {
            this.userService.getById(this.userToLesson.userId)
              .subscribe((student) => {
                this.student = student;
              })
          });

    } else if (role == RoleType.INSTRUCTOR) {
      //TODO bad decision to split the logic based in url. Split th logic based on component logic.
      let studentId = -1;
      this.route.params.subscribe((params) => {
        studentId = params[PathVariable.STUDENT_ID];
      });
      this.courseService.getUserLessonInfo(this.courseId, this.lessonId, studentId)
        .subscribe((userToLesson) => {
          this.userToLesson = userToLesson;
        })

      this.userService.getById(studentId)
        .subscribe((student) => {
          this.student = student;
        })
    }

    this.courseService.getLessonsInCourse(this.courseId, this.lessonId)
      .subscribe((lesson) => {
        this.lesson = lesson;
      });
  }

  get user(): UserInfo {
    return this.authenticationService.userValue
  }

  onAssignMark(newMark: NgModel) {
    let mark: number = newMark.value;
    if (mark) {
      this.userToLesson.mark = mark;
      this.courseService.updateUsersLessonInfo(this.courseId, this.lessonId, this.student.id, this.userToLesson)
        .subscribe((userToLesson) => {
        this.userToLesson = userToLesson;
      })
    }
  }
}

enum PathVariable {

  COURSE_ID = "courseId",
  LESSON_ID = "lessonId",
  STUDENT_ID = "studentId",

}
