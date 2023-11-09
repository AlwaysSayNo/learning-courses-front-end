import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonTemplateService} from "@app/service/lesson-template/lesson-template.service";
import {LessonTemplate} from "@app/shared/model/LessonTemplate";
import {ChapterTemplateService} from "@app/service/chapter-template/chapter-template.service";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-lesson-template-list',
  templateUrl: './lesson-template-list.component.html',
  styleUrls: ['./lesson-template-list.component.scss']
})
export class LessonTemplateListComponent implements OnInit {

  lessonTemplates!: LessonTemplate[];
  chapterTemplateId!: number;
  courseTemplateId!: number;
  showCreateForm = false;

  constructor(private chapterTemplateService: ChapterTemplateService,
              private lessonTemplateService: LessonTemplateService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseTemplateId = +queryParams.get('courseTemplateId')!;
        this.chapterTemplateId = +queryParams.get('chapterTemplateId')!;
        return this.chapterTemplateService.getAllLessonsInChapterTemplate(this.chapterTemplateId);
      }))
      .subscribe({
        next: (lessonTemplates) => {
          this.lessonTemplates = lessonTemplates;
        },
        error: () => {
          console.log("There is no such chapter template with lessons.")
          void this.router.navigate(["/templates/chapters/chapter"],
            {queryParams: {chapterTemplateId: this.chapterTemplateId}})
        }
      });
  }

  onAddLessonTemplate(lessonTemplate: LessonTemplate) {
    this.lessonTemplateService.add(this.chapterTemplateId, lessonTemplate)
      .subscribe((data) => {
        this.lessonTemplates.push(data);
      });
    this.showCreateForm = false;
  }

}
