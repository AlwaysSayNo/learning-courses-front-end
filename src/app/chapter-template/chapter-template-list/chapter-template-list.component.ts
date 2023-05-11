import {Component, OnInit} from '@angular/core';
import {ChapterTemplate} from "../../shared/model/ChapterTemplate";
import {ChapterTemplateService} from "../../service/chapter-template/chapter-template.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chapter-template-list',
  templateUrl: './chapter-template-list.component.html',
  styleUrls: ['./chapter-template-list.component.scss']
})
export class ChapterTemplateListComponent implements OnInit {

  templates!: ChapterTemplate[];
  courseTemplateId!: number;
  showCreateForm = false;

  constructor(private chapterTemplateService: ChapterTemplateService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseTemplateId = params['courseTemplateId'];
    });

    this.chapterTemplateService.getAllInCourse(this.courseTemplateId).subscribe((data) => {
      this.templates = data;
    });
  }

  onAddChapterTemplate(chapterTemplate: ChapterTemplate) {
    this.chapterTemplateService.add(this.courseTemplateId, chapterTemplate).subscribe((data) => {
      this.templates.push(data);
    });
    this.showCreateForm = false;
  }
}
