import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTemplateDetailsComponent } from './lesson-template-details.component';

describe('LessonsTemplateDetailsComponent', () => {
  let component: LessonTemplateDetailsComponent;
  let fixture: ComponentFixture<LessonTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTemplateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
