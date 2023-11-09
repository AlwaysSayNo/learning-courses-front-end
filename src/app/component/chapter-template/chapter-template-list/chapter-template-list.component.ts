import {Component, OnInit} from '@angular/core';
import {ChapterTemplate} from "@app/shared/model/ChapterTemplate";
import {ChapterTemplateService} from "@app/service/chapter-template/chapter-template.service";
import {ActivatedRoute, Router} from "@angular/router";
import {concatMap} from "rxjs";
import {CourseTemplateService} from "@app/service/course-template/course-template.service";

@Component({
  selector: 'app-chapter-template-list',
  templateUrl: './chapter-template-list.component.html',
  styleUrls: ['./chapter-template-list.component.scss']
})
export class ChapterTemplateListComponent implements OnInit {

  chapterTemplates!: ChapterTemplate[];
  courseTemplateId!: number;
  showCreateForm = false;

  constructor(private courseTemplateService: CourseTemplateService,
              private chapterTemplateService: ChapterTemplateService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(concatMap((queryParams) => {
        this.courseTemplateId = +queryParams.get('courseTemplateId')!;
        return this.courseTemplateService.getAllChaptersInCourseTemplate(this.courseTemplateId);
      }))
      .subscribe({
        next: (templates) => {
          this.chapterTemplates = templates;
        },
        error: () => {
          console.log("There is no such course template with chapters.")
          void this.router.navigate(["/templates/courses"])
        }
      });
  }

  onAddChapterTemplate(chapterTemplate: ChapterTemplate) {
    this.chapterTemplateService.add(this.courseTemplateId, chapterTemplate).subscribe((data) => {
      this.chapterTemplates.push(data);
    });
    this.showCreateForm = false;
  }
}
