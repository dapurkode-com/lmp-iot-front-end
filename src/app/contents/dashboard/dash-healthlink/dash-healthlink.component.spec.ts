import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHealthlinkComponent } from './dash-healthlink.component';

describe('DashHealthlinkComponent', () => {
  let component: DashHealthlinkComponent;
  let fixture: ComponentFixture<DashHealthlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHealthlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHealthlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
