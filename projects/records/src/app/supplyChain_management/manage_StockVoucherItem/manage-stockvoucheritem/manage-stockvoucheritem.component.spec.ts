import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockvoucheritemComponent } from './manage-stockvoucheritem.component';

describe('ManageStockvoucheritemComponent', () => {
  let component: ManageStockvoucheritemComponent;
  let fixture: ComponentFixture<ManageStockvoucheritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockvoucheritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockvoucheritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
