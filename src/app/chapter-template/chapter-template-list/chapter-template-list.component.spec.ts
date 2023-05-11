import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTemplateListComponent } from './chapter-template-list.component';

describe('ChapterTemplateListComponent', () => {
  let component: ChapterTemplateListComponent;
  let fixture: ComponentFixture<ChapterTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
