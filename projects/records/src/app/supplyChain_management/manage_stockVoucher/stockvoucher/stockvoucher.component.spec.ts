import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvoucherComponent } from './stockvoucher.component';

describe('StockvoucherComponent', () => {
  let component: StockvoucherComponent;
  let fixture: ComponentFixture<StockvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
