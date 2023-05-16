import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonDetailsComponent } from './my-lesson-details.component';

describe('MyLessonDetailsComponent', () => {
  let component: MyLessonDetailsComponent;
  let fixture: ComponentFixture<MyLessonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLessonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLessonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
