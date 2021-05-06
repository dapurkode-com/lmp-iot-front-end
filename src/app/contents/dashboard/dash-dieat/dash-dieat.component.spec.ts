import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDieatComponent } from './dash-dieat.component';

describe('DashDieatComponent', () => {
  let component: DashDieatComponent;
  let fixture: ComponentFixture<DashDieatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDieatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDieatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
