import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRamzComponent } from './dash-ramz.component';

describe('DashRamzComponent', () => {
  let component: DashRamzComponent;
  let fixture: ComponentFixture<DashRamzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRamzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRamzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
