import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTemplateUpdateComponent } from './lesson-template-update.component';

describe('LessonTemplateUpdateComponent', () => {
  let component: LessonTemplateUpdateComponent;
  let fixture: ComponentFixture<LessonTemplateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTemplateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTemplateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
