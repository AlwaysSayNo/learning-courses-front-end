import { TestBed } from '@angular/core/testing';

import { UserToCourseService } from './user-to-course.service';

describe('UserCourseService', () => {
  let service: UserToCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserToCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
