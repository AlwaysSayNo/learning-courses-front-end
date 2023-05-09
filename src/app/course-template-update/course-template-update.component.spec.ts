import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTemplateUpdateComponent } from './course-template-update.component';

describe('CourseTemplateUpdateComponent', () => {
  let component: CourseTemplateUpdateComponent;
  let fixture: ComponentFixture<CourseTemplateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTemplateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTemplateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
