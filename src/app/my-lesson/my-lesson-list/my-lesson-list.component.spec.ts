import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonListComponent } from './my-lesson-list.component';

describe('MyLessonListComponent', () => {
  let component: MyLessonListComponent;
  let fixture: ComponentFixture<MyLessonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLessonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLessonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
