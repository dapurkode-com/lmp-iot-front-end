import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamzComponent } from './ramz.component';

describe('RamzComponent', () => {
  let component: RamzComponent;
  let fixture: ComponentFixture<RamzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
