import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "@app/service/course/course.service";
import {ChapterService} from "@app/service/chapter/chapter.service";
import {concatMap} from "rxjs";
import {Chapter} from "@app/shared/model/Chapter";

@Component({
  selector: 'app-my-chapter-list',
  templateUrl: './my-chapter-list.component.html',
  styleUrls: ['./my-chapter-list.component.scss']
})
export class MyChapterListComponent implements OnInit {

  chapters!: Chapter[];
  courseId!: number;

  constructor(private courseService: CourseService,
              private chapterService: ChapterService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseId = +queryParams.get('courseId')!;
        return this.courseService.getAllChaptersInCourse(this.courseId);
      }))
      .subscribe({
        next: (chapters) => {
          this.chapters = chapters;
        },
        error: () => {
          console.log("There is no such course with chapters.")
          void this.router.navigate(["/my/courses"])
        }
      });
  }

}
