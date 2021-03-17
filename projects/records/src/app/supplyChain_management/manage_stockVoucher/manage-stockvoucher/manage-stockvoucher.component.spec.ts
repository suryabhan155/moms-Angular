import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockvoucherComponent } from './manage-stockvoucher.component';

describe('ManageStockvoucherComponent', () => {
  let component: ManageStockvoucherComponent;
  let fixture: ComponentFixture<ManageStockvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
