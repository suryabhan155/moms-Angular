import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingdiscountComponent } from './billingdiscount.component';

describe('BillingdiscountComponent', () => {
  let component: BillingdiscountComponent;
  let fixture: ComponentFixture<BillingdiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingdiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
