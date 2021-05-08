import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthHeartrateComponent } from './health-heartrate.component';

describe('HealthHeartrateComponent', () => {
  let component: HealthHeartrateComponent;
  let fixture: ComponentFixture<HealthHeartrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthHeartrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthHeartrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
