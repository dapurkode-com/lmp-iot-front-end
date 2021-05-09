import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMoodComponent } from './health-mood.component';

describe('HealthMoodComponent', () => {
  let component: HealthMoodComponent;
  let fixture: ComponentFixture<HealthMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthMoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
