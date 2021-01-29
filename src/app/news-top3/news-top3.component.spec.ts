import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTop3Component } from './news-top3.component';

describe('NewsTop3Component', () => {
  let component: NewsTop3Component;
  let fixture: ComponentFixture<NewsTop3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTop3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
