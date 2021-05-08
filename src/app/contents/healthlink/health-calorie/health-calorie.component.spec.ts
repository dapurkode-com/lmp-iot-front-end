import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCalorieComponent } from './health-calorie.component';

describe('HealthCalorieComponent', () => {
  let component: HealthCalorieComponent;
  let fixture: ComponentFixture<HealthCalorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCalorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
