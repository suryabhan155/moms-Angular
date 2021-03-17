import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingdiscountManageComponent } from './billingdiscount-manage.component';

describe('BillingdiscountManageComponent', () => {
  let component: BillingdiscountManageComponent;
  let fixture: ComponentFixture<BillingdiscountManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingdiscountManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingdiscountManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
