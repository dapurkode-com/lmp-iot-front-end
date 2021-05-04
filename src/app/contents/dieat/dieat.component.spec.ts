import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieatComponent } from './dieat.component';

describe('DieatComponent', () => {
  let component: DieatComponent;
  let fixture: ComponentFixture<DieatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
