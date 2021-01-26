import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarInfoComponent } from './dollar-info.component';

describe('DollarInfoComponent', () => {
  let component: DollarInfoComponent;
  let fixture: ComponentFixture<DollarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
