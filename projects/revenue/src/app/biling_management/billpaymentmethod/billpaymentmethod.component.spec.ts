import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpaymentmethodComponent } from './billpaymentmethod.component';

describe('BillpaymentmethodComponent', () => {
  let component: BillpaymentmethodComponent;
  let fixture: ComponentFixture<BillpaymentmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillpaymentmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillpaymentmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
