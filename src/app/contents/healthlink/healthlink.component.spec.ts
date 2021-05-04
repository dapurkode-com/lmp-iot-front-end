import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthlinkComponent } from './healthlink.component';

describe('HealthlinkComponent', () => {
  let component: HealthlinkComponent;
  let fixture: ComponentFixture<HealthlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
