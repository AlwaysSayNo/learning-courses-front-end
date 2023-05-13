import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonTemplateService} from "../../service/lesson-template/lesson-template.service";
import {LessonTemplate} from "../../shared/model/LessonTemplate";

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonTemplateService: LessonTemplateService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseTemplateId = params['courseTemplateId'];
      this.chapterTemplateId = params['chapterTemplateId'];
      this.lessonTemplateId = params['lessonTemplateId'];
    });

    this.lessonTemplateService.getById(this.courseTemplateId, this.chapterTemplateId, this.lessonTemplateId).subscribe((data) => {
      this.lessonTemplate = data;
    });
  }

  delete(): void {
    this.lessonTemplateService.delete(this.courseTemplateId, this.chapterTemplateId, this.lessonTemplateId).subscribe();
    void this.router.navigateByUrl(`/course-templates/${this.courseTemplateId}/chapter-templates/${this.chapterTemplateId}/lesson-templates`);
  }

  onUpdateLessonTemplate(lessonTemplate: LessonTemplate): void {
    this.lessonTemplate = {...lessonTemplate};
    this.lessonTemplateService.update(this.courseTemplateId, this.chapterTemplateId, this.lessonTemplateId, this.lessonTemplate).subscribe();
    this.showUpdateForm = false;
  }

}
