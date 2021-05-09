import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSleepComponent } from './health-sleep.component';

describe('HealthSleepComponent', () => {
  let component: HealthSleepComponent;
  let fixture: ComponentFixture<HealthSleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSleepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
