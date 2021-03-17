import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvoucheritemComponent } from './stockvoucheritem.component';

describe('StockvoucheritemComponent', () => {
  let component: StockvoucheritemComponent;
  let fixture: ComponentFixture<StockvoucheritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockvoucheritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvoucheritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
