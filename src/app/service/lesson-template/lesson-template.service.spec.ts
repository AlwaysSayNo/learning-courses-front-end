import { TestBed } from '@angular/core/testing';

import { LessonTemplateService } from './lesson-template.service';

describe('LessonTemplateService', () => {
  let service: LessonTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
