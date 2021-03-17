import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePurchaseorderComponent } from './manage-purchaseorder.component';

describe('ManagePurchaseorderComponent', () => {
  let component: ManagePurchaseorderComponent;
  let fixture: ComponentFixture<ManagePurchaseorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePurchaseorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
