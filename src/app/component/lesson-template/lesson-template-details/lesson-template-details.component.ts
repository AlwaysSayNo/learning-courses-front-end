import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonTemplateService} from "@app/service/lesson-template/lesson-template.service";
import {LessonTemplate} from "@app/shared/model/LessonTemplate";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-lesson-template-details',
  templateUrl: './lesson-template-details.component.html',
  styleUrls: ['./lesson-template-details.component.scss']
})
export class LessonTemplateDetailsComponent implements OnInit {

  courseTemplateId!: number;
  chapterTemplateId!: number;
  lessonTemplateId!: number;
  lessonTemplate!: LessonTemplate;
  showUpdateForm = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lessonTemplateService: LessonTemplateService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseTemplateId = +queryParams.get('courseTemplateId')!;
        this.lessonTemplateId = +queryParams.get('lessonTemplateId')!;
        this.chapterTemplateId = +queryParams.get('chapterTemplateId')!;
        return this.lessonTemplateService.getById(this.lessonTemplateId);
      }))
      .subscribe({
        next: (lessonTemplate) => {
          this.lessonTemplate = lessonTemplate;
        },
        error: () => {
          console.log("There is no such lesson template.")
          void this.router.navigate(["/templates/chapters/chapter/lessons"],
            {queryParams: {chapterTemplateId: this.chapterTemplateId, courseTemplateId: this.courseTemplateId}});
        }
      });
  }

  onLessonTemplateDelete(): void {
    this.lessonTemplateService.delete(this.lessonTemplateId)
      .subscribe(() => {
        void this.router.navigate(["/templates/chapters/chapter/lessons"],
          {queryParams: {chapterTemplateId: this.chapterTemplateId, courseTemplateId: this.courseTemplateId}});
      });
  }

  onUpdateLessonTemplate(lessonTemplate: LessonTemplate): void {
    this.lessonTemplateService.update(this.lessonTemplateId, this.lessonTemplate)
      .subscribe(() => {
        this.lessonTemplate = {...lessonTemplate};
      });
    this.showUpdateForm = false;
  }

}
