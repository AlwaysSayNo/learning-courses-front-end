import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTemplateAddComponent } from './chapter-template-add.component';

describe('ChapterTemplateAddComponent', () => {
  let component: ChapterTemplateAddComponent;
  let fixture: ComponentFixture<ChapterTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTemplateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
