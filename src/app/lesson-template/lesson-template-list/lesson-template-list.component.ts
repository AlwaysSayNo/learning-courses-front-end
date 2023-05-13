import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonTemplateService} from "../../service/lesson-template/lesson-template.service";
import {LessonTemplate} from "../../shared/model/LessonTemplate";

@Component({
  selector: 'app-lesson-template-list',
  templateUrl: './lesson-template-list.component.html',
  styleUrls: ['./lesson-template-list.component.scss']
})
export class LessonTemplateListComponent implements OnInit {

  templates!: LessonTemplate[];
  courseTemplateId!: number;
  chapterTemplateId!: number;
  showCreateForm = false;

  constructor(private lessonTemplateService: LessonTemplateService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseTemplateId = params['courseTemplateId'];
      this.chapterTemplateId = params['chapterTemplateId'];
    });

    this.lessonTemplateService.getAllInChapter(this.courseTemplateId, this.chapterTemplateId).subscribe((data) => {
      this.templates = data;
    });
  }

  onAddLessonTemplate(lessonTemplate: LessonTemplate) {
    this.lessonTemplateService.add(this.courseTemplateId, this.chapterTemplateId, lessonTemplate).subscribe((data) => {
      this.templates.push(data);
    });
    this.showCreateForm = false;
  }

}
