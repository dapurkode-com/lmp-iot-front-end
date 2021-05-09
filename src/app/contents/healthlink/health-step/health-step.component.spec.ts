import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStepComponent } from './health-step.component';

describe('HealthStepComponent', () => {
  let component: HealthStepComponent;
  let fixture: ComponentFixture<HealthStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
