import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVoucherIssueComponent } from './stock-voucher-issue.component';

describe('StockVoucherIssueComponent', () => {
  let component: StockVoucherIssueComponent;
  let fixture: ComponentFixture<StockVoucherIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockVoucherIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockVoucherIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
