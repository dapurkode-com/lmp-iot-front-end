import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCalorieDeviationComponent } from './dash-calorie-deviation.component';

describe('DashCalorieDeviationComponent', () => {
  let component: DashCalorieDeviationComponent;
  let fixture: ComponentFixture<DashCalorieDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCalorieDeviationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCalorieDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
