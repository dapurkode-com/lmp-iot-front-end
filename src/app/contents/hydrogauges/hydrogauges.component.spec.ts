import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrogaugesComponent } from './hydrogauges.component';

describe('HydrogaugesComponent', () => {
  let component: HydrogaugesComponent;
  let fixture: ComponentFixture<HydrogaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrogaugesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrogaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
