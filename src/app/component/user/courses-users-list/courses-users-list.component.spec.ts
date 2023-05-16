import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUsersListComponent } from './courses-users-list.component';

describe('UserListComponent', () => {
  let component: CoursesUsersListComponent;
  let fixture: ComponentFixture<CoursesUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
