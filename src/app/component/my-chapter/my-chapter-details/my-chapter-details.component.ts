import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {concatMap} from "rxjs";
import {Chapter} from "@app/shared/model/Chapter";
import {ChapterService} from "@app/service/chapter/chapter.service";

@Component({
  selector: 'app-my-chapter-details',
  templateUrl: './my-chapter-details.component.html',
  styleUrls: ['./my-chapter-details.component.scss']
})
export class MyChapterDetailsComponent implements OnInit {

  chapterId!: number;
  courseId!: number;
  chapter!: Chapter;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private chapterService: ChapterService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.chapterId = +queryParams.get('chapterId')!;
        this.courseId = +queryParams.get('courseId')!;
        return this.chapterService.getById(this.chapterId);
      }))
      .subscribe({
        next: (chapter) => {
          this.chapter = chapter;
        },
        error: (err) => {
          console.error(err);
          void this.router.navigate(["/my/courses/course/chapters"],
            {queryParams: {courseId: this.courseId, chapterId: this.chapterId}});
        }
      })
  }

}
