import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTemplateAddComponent } from './course-template-add.component';

describe('CourseTemplateAddComponent', () => {
  let component: CourseTemplateAddComponent;
  let fixture: ComponentFixture<CourseTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTemplateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
