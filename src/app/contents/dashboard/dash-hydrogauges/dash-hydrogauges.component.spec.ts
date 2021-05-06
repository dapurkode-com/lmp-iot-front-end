import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHydrogaugesComponent } from './dash-hydrogauges.component';

describe('DashHydrogaugesComponent', () => {
  let component: DashHydrogaugesComponent;
  let fixture: ComponentFixture<DashHydrogaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHydrogaugesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHydrogaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
