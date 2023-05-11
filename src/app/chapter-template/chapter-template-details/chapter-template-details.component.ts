import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterTemplateService} from "../../service/chapter-template/chapter-template.service";
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private chapterTemplateService: ChapterTemplateService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseTemplateId = params['courseTemplateId'];
      this.chapterTemplateId = params['chapterTemplateId'];
    });

    this.chapterTemplateService.getById(this.courseTemplateId, this.chapterTemplateId).subscribe((data) => {
      this.chapterTemplate = data;
    });
  }

  delete(): void {
    this.chapterTemplateService.delete(this.courseTemplateId, this.chapterTemplateId).subscribe();
    void this.router.navigateByUrl(`/course-templates/${this.courseTemplateId}/chapter-templates`);
  }

  onUpdateChapterTemplate(chapterTemplate: ChapterTemplate): void {
    this.chapterTemplate = {...chapterTemplate};
    this.chapterTemplateService.update(this.courseTemplateId, this.chapterTemplateId, this.chapterTemplate).subscribe();
    this.showUpdateForm = false;
  }

}
