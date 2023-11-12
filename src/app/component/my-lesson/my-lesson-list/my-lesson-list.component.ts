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
import {concatMap} from "rxjs";
import {ChapterService} from "@app/service/chapter/chapter.service";

@Component({
  selector: 'app-my-lesson-list',
  templateUrl: './my-lesson-list.component.html',
  styleUrls: ['./my-lesson-list.component.scss']
})
export class MyLessonListComponent implements OnInit {

  public ROLE_TYPE = RoleType;
  courseId!: number;
  chapterId!: number
  lessons!: Lesson[];
  lessonIdToUserToLesson = new Map<number, UserToLesson>();
  students!: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private chapterService: ChapterService,
              private lessonService: LessonService,
              private userToCourseService: UserToCourseService,
              private authenticationService: SecurityService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.chapterId = +queryParams.get('chapterId')!;
        this.courseId = +queryParams.get('courseId')!;
        return this.chapterService.getAllLessonsInChapter(this.chapterId);
      }))
      .pipe(concatMap((lessons) => {
        this.lessons = lessons;
        return this.chapterService.getAllUsersToLessonsInChapter(this.chapterId);
      }))
      .pipe(concatMap((usersToLessons) => {
        for (let i = 0; i < usersToLessons.length; ++i) {
          this.lessonIdToUserToLesson.set(usersToLessons[i].lessonId, usersToLessons[i]);
        }
        return this.courseService.getAllUserToCourseInfo(this.courseId, RoleType.STUDENT);
      }))
      .subscribe({
        next: (usersToCourses) => {
          this.students = usersToCourses.map(utc => utc.user);
        },
        error: () => {
          console.error("Something went wrong")
          void this.router.navigate(['/my/chapters/chapter'],
            {queryParams: {'courseId': this.courseId, 'chapterId': this.chapterId}});
        }
      });
  }

  get user(): UserInfo {
    return this.authenticationService.userValue;
  }

  onLessonClose(lesson: Lesson): void {
    this.lessonService.finishLesson(lesson.id)
      .subscribe(() => {
        lesson.isFinished = true;
      });

  }

}
