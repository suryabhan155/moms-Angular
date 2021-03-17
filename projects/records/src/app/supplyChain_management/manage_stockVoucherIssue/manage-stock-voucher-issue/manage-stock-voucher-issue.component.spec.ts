import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockVoucherIssueComponent } from './manage-stock-voucher-issue.component';

describe('ManageStockVoucherIssueComponent', () => {
  let component: ManageStockVoucherIssueComponent;
  let fixture: ComponentFixture<ManageStockVoucherIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockVoucherIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockVoucherIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
