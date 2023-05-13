import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTemplateListComponent } from './lesson-template-list.component';

describe('LessonTemplateListComponent', () => {
  let component: LessonTemplateListComponent;
  let fixture: ComponentFixture<LessonTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
