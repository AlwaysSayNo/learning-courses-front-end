import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChapterTemplateDetailsComponent} from './chapter-template-details.component';

describe('ChapterTemplateDetailsComponent', () => {
  let component: ChapterTemplateDetailsComponent;
  let fixture: ComponentFixture<ChapterTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterTemplateDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
