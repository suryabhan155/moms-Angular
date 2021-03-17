import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobCalculatorComponent } from './dob-calculator.component';

describe('DobCalculatorComponent', () => {
  let component: DobCalculatorComponent;
  let fixture: ComponentFixture<DobCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
