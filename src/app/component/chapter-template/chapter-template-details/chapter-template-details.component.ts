import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterTemplateService} from "@app/service/chapter-template/chapter-template.service";
import {ChapterTemplate} from "@app/shared/model/ChapterTemplate";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-chapter-template-details',
  templateUrl: './chapter-template-details.component.html',
  styleUrls: ['./chapter-template-details.component.scss']
})
export class ChapterTemplateDetailsComponent implements OnInit {

  courseTemplateId!: number;
  chapterTemplateId!: number;
  chapterTemplate!: ChapterTemplate;
  showUpdateForm = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private chapterTemplateService: ChapterTemplateService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseTemplateId = +queryParams.get('courseTemplateId')!;
        this.chapterTemplateId = +queryParams.get('chapterTemplateId')!;
        return this.chapterTemplateService.getById(this.chapterTemplateId);
      }))
      .subscribe({
        next: (chapterTemplate) => {
          this.chapterTemplate = chapterTemplate;
        },
        error: () => {
          console.log("There is no such chapter template.")
          void this.router.navigate(["/templates/courses/course/chapters"],
            {queryParams: {courseTemplateId: this.courseTemplateId}})
        }
      });
  }

  onChapterTemplateDelete(): void {
    this.chapterTemplateService.delete(this.chapterTemplateId)
      .subscribe(() => {
        void this.router.navigate(["/templates/courses/course/chapters"],
          {queryParams: {courseTemplateId: this.courseTemplateId}});
      });
  }

  onUpdateChapterTemplate(chapterTemplate: ChapterTemplate): void {
    this.chapterTemplateService.update(this.chapterTemplateId, chapterTemplate)
      .subscribe({
        next: (chapterTemplate) => {
          this.chapterTemplate = chapterTemplate;
        },
        error: (err) => {
          console.log(err)
        }
      });
    this.showUpdateForm = false;
  }

}
