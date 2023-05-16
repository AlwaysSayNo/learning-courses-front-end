import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTemplateListComponent } from './course-template-list.component';

describe('CourseTemplateListComponent', () => {
  let component: CourseTemplateListComponent;
  let fixture: ComponentFixture<CourseTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
