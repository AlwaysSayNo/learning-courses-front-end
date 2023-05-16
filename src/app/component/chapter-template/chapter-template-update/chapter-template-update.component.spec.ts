import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChapterTemplateUpdateComponent} from './chapter-template-update.component';

describe('ChapterTemplateUpdateComponent', () => {
  let component: ChapterTemplateUpdateComponent;
  let fixture: ComponentFixture<ChapterTemplateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterTemplateUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTemplateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
