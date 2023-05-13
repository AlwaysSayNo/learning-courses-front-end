import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTemplateAddComponent } from './lesson-template-add.component';

describe('LessonTemplateAddComponent', () => {
  let component: LessonTemplateAddComponent;
  let fixture: ComponentFixture<LessonTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTemplateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
