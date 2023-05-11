import { TestBed } from '@angular/core/testing';

import { ChapterTemplateService } from './chapter-template.service';

describe('ChapterTemplateService', () => {
  let service: ChapterTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
