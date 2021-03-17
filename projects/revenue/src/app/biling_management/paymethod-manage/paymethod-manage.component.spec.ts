import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodManageComponent } from './paymethod-manage.component';

describe('PaymethodManageComponent', () => {
  let component: PaymethodManageComponent;
  let fixture: ComponentFixture<PaymethodManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
